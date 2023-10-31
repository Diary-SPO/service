import { AbsenceTypes, Gradebook, LessonWorkType } from 'diary-shared'
import { FC } from 'react'
import TimeRemaining from '../TimeRemaining'
import SubtitleWithBorder from '../SubtitleWithBorder'

interface ILessonSubtitle {
  gradebook: Gradebook | undefined
  lessonDate: Date
  startTime: string | undefined
  endTime: string | undefined
}

const LessonSubtitle: FC<ILessonSubtitle> = ({
  gradebook,
  lessonDate,
  startTime,
  endTime,
}) => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {gradebook?.lessonType && (
        <SubtitleWithBorder style={{ margin: '5px 5px 5px 0px' }}>
          {LessonWorkType[gradebook?.lessonType]}
        </SubtitleWithBorder>
      )}
      {gradebook?.absenceType && (
        <SubtitleWithBorder
          color={gradebook.absenceType === 'IsLate' ? 'yellow' : 'red'}
        >
          {AbsenceTypes[gradebook?.absenceType]}
        </SubtitleWithBorder>
      )}
    </div>
    <TimeRemaining
      lessonDate={lessonDate}
      startTime={startTime}
      endTime={new Date(endTime)}
    />
  </div>
)

export default LessonSubtitle
