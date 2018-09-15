import Datastore from 'nedb'
import config from '@/config'

const db = {
  data: new Datastore({
    filename: config.database.data.filename,
    autoload: true
  }),
  devices: new Datastore({
    filename: config.database.devices.filename,
    autoload: true
  })
}

export default db
export * from './device'
