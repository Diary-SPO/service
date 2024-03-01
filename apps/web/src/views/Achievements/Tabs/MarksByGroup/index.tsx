import { PerformanceCurrent } from '@diary-spo/shared'
import { createSubjectMarksMap } from '@utils'
import {
  Card,
  CardGrid,
  Div,
  Group,
  Header,
  HorizontalScroll,
  Placeholder,
  Title
} from '@vkontakte/vkui'
import { FC } from 'preact/compat'

import AverageMarkCell from './AverageMarkCell'
import MarksList from './MarksList'

interface IMarksByGroup {
  marksForSubject: PerformanceCurrent
}

export const MarksByGroup: FC<IMarksByGroup> = ({ marksForSubject }) => {
  if (!marksForSubject) {
    return <Placeholder>Данных нет</Placeholder>
  }

  const subjectMarksMap = createSubjectMarksMap(marksForSubject)

  return (
    <Group
      mode='plain'
      header={<Header mode='secondary'>Оценки по дисциплинам</Header>}
    >
      {Object.keys(subjectMarksMap).map((subjectName, i) => (
        <CardGrid key={i} size='l'>
          <Card mode='shadow'>
            <Div>
              {/*//@ts-ignore типы React не совсем совместимы с Preact*/}
              <Title level='3' Component='h3'>
                {subjectName}
              </Title>
            </Div>

            <HorizontalScroll>
              <MarksList marks={subjectMarksMap[subjectName]} />
            </HorizontalScroll>

            <AverageMarkCell
              marks={subjectMarksMap[subjectName].flatMap(({ marks }) => marks)}
            />
          </Card>
        </CardGrid>
      ))}
    </Group>
  )
}

export default MarksByGroup