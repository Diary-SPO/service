import { Lesson } from 'diary-shared'
import { formatLessonName } from './formatted/formatLessonName'

/**
 * Функция 'setLessonDetails' обрабатывает данные урока для модального окна.
 * Она принимает объект урока (типа Lesson) и деконструирует его свойства для формирования структурированного объекта данных.
 * Название урока форматируется с помощью функции 'formatLessonName'.
 * Каждый раздел содержит конкретные детали урока, извлеченные из предоставленного объекта Lesson.
 * Эта функция также обеспечивает резервные значения для отсутствующих или неопределенных свойств в объекте Lesson.
 * Возвращает структурированный объект, содержащий детали урока.
 */

export const setLessonDetails = (lesson: Lesson) => {
  const {
    name,
    endTime,
    startTime,
    timetable,
    gradebook,
    tasks: tasksArray,
  } = lesson

  const formattedName = formatLessonName(name)

  return {
    lessonData: {
      name: formattedName,
      gradebook: {
        absenceType: gradebook?.absenceType,
        id: gradebook?.id || 0,
        lessonType: gradebook?.lessonType,
        tasks: tasksArray,
        themes: gradebook?.themes,
      },
      timetable: {
        classroom: {
          id: 0,
          building: '',
          name: timetable?.classroom?.name || '',
        },
        teacher: {
          id: timetable?.teacher?.id || 0,
          lastName: timetable?.teacher?.lastName || '',
          firstName: timetable?.teacher?.firstName || '',
          middleName: timetable?.teacher?.middleName || '',
        },
      },
      startTime: startTime || 'Что-то не так с датой',
      endTime: endTime || 'Что-то не так с датой',
    },
    lessonMainInfo: {
      name: formattedName,
      lessonType: gradebook?.lessonType || '',
      themes: gradebook?.themes,
      teacherName: timetable?.teacher
        ? `${timetable.teacher.lastName} ${timetable.teacher.firstName} ${timetable.teacher.middleName}`
        : 'Не указан',
      classroomName: timetable?.classroom?.name || 'Не указана',
    },
    lessonTimePlaceInfo: {
      startTime: startTime || 'Что-то не так с датой',
      endTime: endTime || 'Что-то не так с датой',
      classroomName: timetable.classroom.name,
    },
  }
}