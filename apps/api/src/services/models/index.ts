import { SPOModel } from './SPO'
import { AbsenceTypeModel } from './absenceType'
import { AcademicYearModel } from './academicYear'
import { AuthModel } from './auth'
import { ClassroomModel } from './classroom'
import { DiaryUserModel } from './diaryUser'
import { ExaminationTypeModel } from './examinationType'
import { FinalMarkModel } from './finalMark'
import { GradebookModel } from './gradebook'
import { GroupModel } from './group'
import { LessonTypeModel } from './lessonType'
import { MarkModel } from './mark'
import { MarkValueModel } from './markValue'
import { RequiredModel } from './required'
import { ScheduleModel } from './schedule'
import { ScheduleSubgroupModel } from './scheduleSubgroup'
import { SubgroupModel } from './subgroup'
import { SubjectModel } from './subject'
import { TaskModel } from './task'
import { TaskTypeModel } from './taskType'
import { TeacherModel } from './teacher'
import { TermModel } from './term'
import { TermSubjectModel } from './termSubject'
import { TermTypeModel } from './termType'
import { ThemeModel } from './theme'

export * from './SPO'
export * from './group'
export * from './diaryUser'
export * from './auth'
export * from './teacher'
export * from './schedule'
export * from './lessonType'
export * from './gradebook'
export * from './theme'
export * from './taskType'
export * from './task'
export * from './mark'
export * from './required'

// Устанавливаем связи

// SPO <--->> Group
SPOModel.hasMany(GroupModel, {
  foreignKey: 'id'
})
GroupModel.belongsTo(SPOModel, {
  foreignKey: 'spoId'
})

// Group <--->> DiaryUser
GroupModel.hasMany(DiaryUserModel, {
  foreignKey: 'id'
})
DiaryUserModel.belongsTo(GroupModel, {
  foreignKey: 'groupId'
})

// DiaryUser <--->> Auth
DiaryUserModel.hasMany(AuthModel, {
  foreignKey: 'id'
})
AuthModel.belongsTo(DiaryUserModel, {
  foreignKey: 'idDiaryUser'
})

// SPO <-->> Teacher
SPOModel.hasMany(TeacherModel, {
  foreignKey: 'id'
})
TeacherModel.belongsTo(SPOModel, {
  foreignKey: 'spoId'
})

// Group <-->> Schedule
GroupModel.hasMany(ScheduleModel, {
  foreignKey: 'id'
})
ScheduleModel.belongsTo(GroupModel, {
  foreignKey: 'groupId'
})

// Teacher <-->> Schedule
TeacherModel.hasMany(ScheduleModel, {
  foreignKey: 'id'
})
ScheduleModel.belongsTo(TeacherModel, {
  foreignKey: 'teacherId'
})

// Group <-->> AcademicYear
GroupModel.hasMany(AcademicYearModel, {
  foreignKey: 'id'
})
AcademicYearModel.belongsTo(GroupModel, {
  foreignKey: 'groupId'
})

// AcademicYear <-->> Term
AcademicYearModel.hasMany(TermModel, {
  foreignKey: 'id'
})
TermModel.belongsTo(AcademicYearModel, {
  foreignKey: 'academicYearId'
})

// Term <-->> TermSubject
TermModel.hasMany(TermSubjectModel, {
  foreignKey: 'id'
})
TermSubjectModel.belongsTo(TermModel, {
  foreignKey: 'termId'
})

// TermSubject <-->> ExaminationType
TermSubjectModel.hasMany(ExaminationTypeModel, {
  foreignKey: 'id'
})
ExaminationTypeModel.belongsTo(TermSubjectModel, {
  foreignKey: 'termSubjectId'
})

// Schedule <-->> Gradebook
ScheduleModel.hasMany(GradebookModel, {
  foreignKey: 'id'
})
GradebookModel.belongsTo(ScheduleModel, {
  foreignKey: 'scheduleId'
})

// LessonType <-->> Gradebook
LessonTypeModel.hasMany(GradebookModel, {
  foreignKey: 'id'
})
GradebookModel.belongsTo(LessonTypeModel, {
  foreignKey: 'lessonTypeId'
})

// Gradebook <-->> Theme
GradebookModel.hasMany(ThemeModel, {
  foreignKey: 'id'
})
ThemeModel.belongsTo(GradebookModel, {
  foreignKey: 'gradebookId'
})

// Gradebook <-->> Task
GradebookModel.hasMany(TaskModel, {
  foreignKey: 'id'
})
TaskModel.belongsTo(GradebookModel, {
  foreignKey: 'gradebookId'
})

// TaskType <-->> Task
TaskTypeModel.hasMany(TaskModel, {
  foreignKey: 'id'
})
TaskModel.belongsTo(TaskTypeModel, {
  foreignKey: 'taskTypeId'
})

// Task <-->> Mark
TaskModel.hasMany(MarkModel, {
  foreignKey: 'id'
})
MarkModel.belongsTo(TaskModel, {
  foreignKey: 'taskId'
})

// DiaryUser <-->> Mark
DiaryUserModel.hasMany(MarkModel, {
  foreignKey: 'id'
})
MarkModel.belongsTo(DiaryUserModel, {
  foreignKey: 'diaryUserId'
})

// Task <-->> Required
TaskModel.hasMany(RequiredModel, {
  foreignKey: 'id'
})
RequiredModel.belongsTo(TaskModel, {
  foreignKey: 'taskId'
})

// DiaryUser <-->> Required
DiaryUserModel.hasMany(RequiredModel, {
  foreignKey: 'id'
})
RequiredModel.belongsTo(DiaryUserModel, {
  foreignKey: 'diaryUserId'
})

// Classroom <-->> Schedule
ClassroomModel.hasMany(ScheduleModel, {
  foreignKey: 'id'
})
ScheduleModel.belongsTo(ClassroomModel, {
  foreignKey: 'classroomId'
})

// SPO <-->> Classroom
SPOModel.hasMany(ClassroomModel, {
  foreignKey: 'id'
})
ClassroomModel.belongsTo(SPOModel, {
  foreignKey: 'spoId'
})

// Subject <-->> Schedule
SubjectModel.hasMany(ScheduleModel, {
  foreignKey: 'id'
})
ScheduleModel.belongsTo(SubjectModel, {
  foreignKey: 'subjectId'
})

// Subject <-->> TermSubject
SubjectModel.hasMany(TermSubjectModel, {
  foreignKey: 'id'
})
TermSubjectModel.belongsTo(SubjectModel, {
  foreignKey: 'subjectId'
})

// TermType <-->> AcademicYear
TermTypeModel.hasMany(AcademicYearModel, {
  foreignKey: 'id'
})
AcademicYearModel.belongsTo(TermTypeModel, {
  foreignKey: 'termTypeId'
})

// Subject <-->> FinalMark
SubjectModel.hasMany(FinalMarkModel, {
  foreignKey: 'id'
})
FinalMarkModel.belongsTo(SubjectModel, {
  foreignKey: 'subjectId'
})

// MarkValue <-->> Mark
MarkValueModel.hasMany(MarkModel, {
  foreignKey: 'id'
})
MarkModel.belongsTo(MarkValueModel, {
  foreignKey: 'markValueId'
})

// MarkValue <-->> FinalMark
MarkValueModel.hasMany(FinalMarkModel, {
  foreignKey: 'id'
})
FinalMarkModel.belongsTo(MarkValueModel, {
  foreignKey: 'markValueId'
})

// MarkValue <-->> TermSubject
MarkValueModel.hasMany(TermSubjectModel, {
  foreignKey: 'id'
})
TermSubjectModel.belongsTo(MarkValueModel, {
  foreignKey: 'markValueId'
})

// AbsenceType <-->> Gradebook
AbsenceTypeModel.hasMany(GradebookModel, {
  foreignKey: 'id'
})
GradebookModel.belongsTo(AbsenceTypeModel, {
  foreignKey: 'absenceTypeId'
})

// Group <-->> Subgroup
GroupModel.hasMany(SubgroupModel, {
  foreignKey: 'id'
})
SubgroupModel.belongsTo(GroupModel, {
  foreignKey: 'groupId'
})


// Subgroup <-->> scheduleSubgroup
SubgroupModel.hasMany(ScheduleSubgroupModel)
ScheduleSubgroupModel.belongsTo(SubgroupModel)

// DiaryUser <-->> scheduleSubgroup
DiaryUserModel.hasMany(ScheduleSubgroupModel)
ScheduleSubgroupModel.belongsTo(DiaryUserModel)

// Schedule <-->> ScheduleSubgroup
ScheduleModel.hasMany(ScheduleSubgroupModel)
ScheduleSubgroupModel.belongsTo(ScheduleModel)