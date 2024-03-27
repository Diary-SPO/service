import { SERVER_URL } from '@config'
import { AttestationResponse } from '@diary-spo/shared'
import { ICacheData } from '@helpers'
import { HeadersWithCookie } from '@utils'
import { getAttestationFromDB } from './getAttestationFromDB'

export const getAttestationFromDiary = async (authData: ICacheData) => {
  const path = `${SERVER_URL}/services/reports/curator/group-attestation-for-student/${authData.idFromDiary}`
  const response = fetch(path, {
    headers: HeadersWithCookie(authData.cookie)
  })

  const res = await response
    .then(async (r) => r.json() as unknown as AttestationResponse)
    .catch(() => null)

  return res
}
