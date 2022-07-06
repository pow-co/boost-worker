
var started = false

import { Miner, Wallet } from 'boostminer'

import config from './config'

const privatekey = config.get('miner_private_key')

const miner = new Miner({ privatekey })

export async function start () {

  miner.start()

  started = true
}

export async function stop () {

  miner.stop()

  started = false
}

export async function isRunning() {

  return !!started

}

if (require.main === module) {

  start()

}
