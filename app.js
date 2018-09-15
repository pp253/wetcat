import path from 'path'
import https from 'https'
import http from 'http'
import fs from 'fs'
import express from 'express'
import session from 'express-session'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import { IS_PRODUCTION } from './lib/utils'
import routes from './routes'
import './models'

export const app = express()

// Security
app.use(helmet())

// Allow CORS
// https://div.io/topic/1825
app.use(cors({ origin: 'http://localhost:8080', credentials: true })) // {credentials: '*'}

// Compression
app.use(compression({ credentials: true, origin: true }))

// Body parser and Validator
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(
  expressValidator({
    customValidators: {}
  })
)

app.use(
  session({
    secret: 'sdfgsbdfgnjdftyjdtrf',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
)

// Debugging
app.use(morgan('dev'))

// Routes
app.use('/', express.static('public'))
app.use('/', routes)

// development error handler
// will print stacktrace
if (!IS_PRODUCTION) {
  app.use(function (err, req, res, next) {
    console.log(err.stack)

    res.status(err.status || 500)

    res.json({
      errors: {
        message: err.message,
        error: err
      }
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  })
})

console.log(`Running in ${IS_PRODUCTION ? 'production' : 'development'} mode.`)
var server = app.listen(process.env.PORT || 80, function () {
  console.log('Listening on port ' + server.address().port)
})
