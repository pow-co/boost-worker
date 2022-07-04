
import axios from 'axios'

import config from '../config'

const slug = 'gh/pow-co/boost-worker'

export async function getProject() {

  const res = await axios.get(`https://circleci.com/api/v2/project/${slug}`, {
    auth: {
      username: config.get('circleci_token'),
      password: null
    }
  })

  return res

}

export async function getEnv() {

}

export async function setEnv() {

}
