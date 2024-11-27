import {MarkEvent} from "../../../types/MarkEvent";
import {SubscribeModel} from "../../../../../models/Subscribe";
import {SubscribeInfo} from "../../../types/SubscribeInfo";

export const getSubscribeInfo = async (event: MarkEvent): Promise<SubscribeInfo | null> => {
    const subscribe = await SubscribeModel.findOne({
        where: {
            diaryUserId: event.diaryUserId
        }
    })

    if (!subscribe)
        return null

    return {
        tgId: subscribe.tgId
    }
}