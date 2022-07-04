
import { reconnect } from '../stratum'

import { log } from '../log'

export default async function(msg) {

  log.info('stratum.client.reconnect', { manual: true }) 

  await reconnect()

}
