import { Router } from 'express'
import api from './api'

const route = Router()

route.get('/echo', function (req, res, next) {
  res.send('echo')
})

route.use('/api', api)

export default route
