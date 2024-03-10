import { NotificationsResponse } from "@diary-spo/shared";
import { ICacheData, objPropertyCopy } from "@helpers";
import { AdsModel, AdsModelType } from "@models";
import { Optional } from "sequelize";

export const adSaveOrGer = async (ad: NotificationsResponse, authData: ICacheData) => {
  const where = {
    spoId: authData.spoId,
    idFromDiary: ad.id
  }

  const defaults: Optional<AdsModelType, 'id' | 'attachments'> = {
    ...where,
    date: ad.date,
    title: ad.title,
    text: ad.text,
    isForEmployees: ad.isForEmployees,
    isForStudents: ad.isForStudents,
    isForParents: ad.isForParents,
    shouldDeleteNews: ad.shouldDeleteNews,
    deleteInDays: ad.deleteInDays
  }
  
  const result = await AdsModel.findOrCreate({where, defaults})

  const adDB = result[0]
  
  objPropertyCopy(adDB, defaults)

  return adDB.save()
}