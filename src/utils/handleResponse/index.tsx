import { VKUI_RED } from '@config'
import { Icon28ErrorCircleOutline } from '@vkontakte/icons'
import { SnackbarData } from '../../hooks/useSnackbar.tsx'
import { HTTP_STATUSES } from '../../types'

/**
 * Функция 'handleResponse' обрабатывает различные негативные сценарии ответа после запроса.
 * Принимает response и выполняет соответствующие коллбэки в зависимости от полученного ответа.
 */

export const handleResponse = <T extends object>(
  response: Response | T,
  errorCallback?: () => void,
  limitExceededCallback?: () => void,
  loadingCallback?: (isLoading: boolean) => void,
  showSnackbar?: (snackbarData: SnackbarData) => void
): undefined | T => {
  console.log('%c[handleResponse]', 'color: green', response)

  /**
   * Если нам пришел ответ от сервера с ошибкой
   *
   * P.S. В "хорошем" ответе нет поля statusText, а только нужные данные
   */
  if ('error' in response) {
    loadingCallback(false)
    errorCallback?.()
    return
  }

  if (!(response instanceof Response) || !('statusText' in response)) {
    loadingCallback(false)

    return response
  }

  console.log('%c[handleResponse]', 'color: violet', response.status)

  const errorIcon = <Icon28ErrorCircleOutline fill={VKUI_RED} />

  switch (response.status) {
    case HTTP_STATUSES.RATE_LIMIT:
      limitExceededCallback()
      break
    case HTTP_STATUSES.UNAUTHORIZED:
      localStorage.clear()
      if (showSnackbar) {
        showSnackbar?.({
          before: errorIcon,
          title: 'Ошибка при попытке сделать запрос',
          subtitle: 'Перезайдите в аккаунт'
        })
      }

      break
    case HTTP_STATUSES.TEAPOT: {
      showSnackbar?.({
        before: errorIcon,
        title: 'Ошибка при попытке сделать запрос',
        subtitle: 'Сообщите нам о проблеме'
      })
      break
    }
    default: {
      break
    }
  }

  if (errorCallback) {
    errorCallback()
  }

  loadingCallback(false)
  return
}
