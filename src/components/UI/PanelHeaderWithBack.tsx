import { FunctionalComponent } from 'preact'
import { PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { memo } from 'react'

const PanelHeaderWithBack: FunctionalComponent<{ title: string }> = ({
  title,
}) => {
  const routeNavigator = useRouteNavigator()

  return (
    <PanelHeader
      before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
    >
      {title}
    </PanelHeader>
  )
}

export default memo(PanelHeaderWithBack)
