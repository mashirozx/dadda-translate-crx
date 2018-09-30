import request from 'axios'
import { SOUGOU_HOST } from '@configs/hosts'
import { AxiosInstance } from 'axios'

const uuid = (): string => {
  let t
  let e
  let n = ''
  for (t = 0; t < 32; t++) {
    ;(e = (16 * Math.random()) | 0),
      (t !== 8 && t !== 12 && t !== 16 && t !== 20) || (n += '-'),
      (n += (t === 12 ? 4 : t === 16 ? (3 & e) | 8 : e).toString(16))
  }

  return n
}

const httpClient: AxiosInstance = request.create({
  baseURL: SOUGOU_HOST
})

class sougou {
  tranalte(text: string) {
    const payload = {
      from: 'auto',
      to: 'zh-CHS',
      client: 'pc',
      fr: 'browser_pc',
      text: encodeURIComponent(text),
      useDetect: 'on',
      useDetectResult: 'on',
      needQc: 1,
      uuid: uuid(),
      oxford: 'on',
      isReturnSugg: 'on'
    }

    return httpClient.post('/reventondc/translate', payload)
  }
}

const SougouServices = new sougou()

export default SougouServices

