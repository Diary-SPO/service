import { Mark } from '@components'
import { LessonType } from '@diary-spo/shared'
import { setDefaultMark } from '@utils'
import {
  Group,
  InfoRow,
  ModalPage,
  ModalPageHeader,
  SimpleCell
} from '@vkontakte/vkui'
import useMarkModal from '../../store/useMarkModal.ts'

const MarkDetailedModal = ({ id }: { id: string }) => {
  const { modalData } = useMarkModal()

  console.warn('\\\\\\')
  console.log(modalData)
  console.log(modalData.data.type)
  return (
    <ModalPage id={id} size={500} dynamicContentHeight>
      <ModalPageHeader>Подробнее об оценке</ModalPageHeader>
      <Group>
        <SimpleCell multiline>
          <InfoRow header='Предмет'>{modalData.lessonName}</InfoRow>
        </SimpleCell>
        <SimpleCell multiline>
          <InfoRow header='Тема'>{modalData.data.topic}</InfoRow>
        </SimpleCell>
        <SimpleCell
          multiline
          after={<Mark size='s' mark={setDefaultMark(modalData.data)} />}
        >
          <InfoRow header='Тип оценки'>
            {LessonType[modalData.data.type] ??
              (modalData.data.isRequired && !modalData.data.mark && 'Долг') ??
              'Неизвестен'}
          </InfoRow>
        </SimpleCell>
      </Group>
    </ModalPage>
  )
}

export default MarkDetailedModal
