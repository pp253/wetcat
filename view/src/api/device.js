import axios from 'axios'
import {API_BASE_DOMAIN} from '.'

const PATH = {
  CREATE: '/api/device/create',
  GET_DATA: '/api/device/getData',
  INSERT_DATA: '/api/device/insertData'
}

export function create (deviceConfig) {
  return new Promise((resolve, reject) => {
    axios.post(API_BASE_DOMAIN + PATH.CREATE, {
      deviceConfig: deviceConfig
    })
    .then(data => {
      resolve(data.data)
    })
    .catch(err => { reject(err) })
  })
}

export function getData (deviceId) {
  return new Promise((resolve, reject) => {
    axios.get(API_BASE_DOMAIN + PATH.GET_DATA, {
      params: {
        deviceId: deviceId
      }
    })
    .then(data => {
      resolve(data.data)
    })
    .catch(err => { reject(err) })
  })
}

export function insertData (deviceId, data) {
  return new Promise((resolve, reject) => {
    axios.post(API_BASE_DOMAIN + PATH.INSERT_DATA, {
      deviceId: deviceId,
      data: data
    })
    .then(data => {
      resolve(data.data)
    })
    .catch(err => { reject(err) })
  })
}
