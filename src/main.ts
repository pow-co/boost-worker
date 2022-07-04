
import config from './config'

import { start as server } from './server'

import { start as actors } from './rabbi/actors'

import { start as stratum } from './stratum'

export async function start() {

  if (config.get('stratum_enabled')) {

    stratum();

  }

  if (config.get('http_api_enabled')) {

    server();

  }

  if (config.get('amqp_enabled')) {

    actors();

  }

}

if (require.main === module) {

  start()

}
