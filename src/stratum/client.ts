
import config from '../config'

import { log } from '../log'

import { Socket } from 'net'

export class Client {

  url: string;

  socket: Socket;

  should_close: Boolean;

  constructor() {

    this.url = config.get('stratum_url')

    log.info('stratum.url', { url : this.url })

    this.connect()

  }

  async connect() {

    log.info('stratum.client.connect')

    const [host, port] = this.url.split('tcp://')[1].split(':')

    this.socket = new Socket()

    const options = {
      host,
      port: parseInt(port)
    }

    this.socket.connect(options)

    this.socket.on('connect', () => {

      log.info('stratum.client.connected')

    })

    this.socket.on('close', () => {

      log.info('stratum.client.closed')

      if (!this.should_close) {

        setTimeout(this.connect, 1000)

      }

    })

    this.socket.on('data', (data) => {

      log.info('stratum.client.data', { data })

    })

  }

  async reconnect() {

    this.should_close = false

    this.socket.end()

  }

  async disconnect() {

    this.should_close = true

    log.info('stratum.client.disconnect')

    this.socket.end()

  }

}
