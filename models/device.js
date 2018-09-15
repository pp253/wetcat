import db from '.'

export class Device {
  constructor (id) {
    this.type = 'device'
    this.id = null
    this.name = null
    this.fixed = null
    this.location = null
    this.hardwareInfo = null

    if (id != null) {
      return this.load(id)
    }
  }

  getData (query) {
    return db.data.find(Object.assign({
      device: this.id
    }, query))
  }

  insertData (data, cb) {
    return new Promise((resolve, reject) => {
      db.data.insert({
        device: this.id,
        timestamp: Date.now(),
        data: data
      }, (err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data)
      })
    })
  }

  load (id) {
    return new Promise((resolve, reject) => {
      console.log('id', id)
      db.devices.findOne({_id: id}, (err, device) => {
        if (err) {
          reject(err)
          return
        }
        if (!device) {
          reject(new Error('Device not found'))
          return
        }
        this.id = id
        this.name = device.name
        this.fixed = device.fixed
        this.location = device.location
        this.hardwareInfo = device.hardwareInfo
        resolve(this)
      })
    })
  }

  // static
  create (device) {
    return new Promise((resolve, reject) => {
      db.devices.insert({
        type: 'device',
        name: device.name,

        /**
         * @type boolean
         * Whether the device is fixed at a place or not.
         */
        fixed: device.fixed,

        /**
         * @type string
         * If `fixed` is false, the `location` property is optional.
         */
        location: device.location,
        hardwareInfo: device.hardwareInfo
      }, (err, device) => {
        if (err) {
          reject(err)
          return
        }
        resolve(device)
      })
    })
  }
}
