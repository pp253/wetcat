import { Router } from 'express'
import { Device } from '@/models'
const router = Router()

router.get('/list', function (req, res, next) {
  Device.list()
    .exec((err, data) => {
      if (err) {
        next(err)
        return
      }
      res.json(data)
    })
})

router.post('/create', function (req, res, next) {
  let deviceConfig = req.body.deviceConfig
  Device.create(deviceConfig)
    .then(device => {
      res.json(device)
    })
    .catch(next)
})

router.get('/getData', function (req, res, next) {
  let deviceId = req.query.deviceId
  let fromTimestamp = req.query.fromTimestamp
  let toTimestamp = req.query.toTimestamp

  let device = new Device()
  device.load(deviceId)
    .then(() => {
      device.getData().sort({timestamp: -1}).limit(1)
        .exec((err, data) => {
          if (err) {
            next(err)
            return
          }
          res.json(data)
        })
    })
    .catch(next)
})

router.post('/insertData', function (req, res, next) {
  let deviceId = req.body.deviceId
  let data = req.body.data

  let device = new Device()
  device.load(deviceId)
    .then(() => {
      return device.insertData(data)
    })
    .then(data => {
      res.json({success: 1})
    })
    .catch(next)
})

export default router
