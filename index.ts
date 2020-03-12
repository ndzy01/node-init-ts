/*
 * @Author: ndzy
 * @Date: 2020-03-12 10:22:11
 * @LastEditTime: 2020-03-12 10:23:18
 * @LastEditors: ndzy
 */
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import config from './config'
import router from './src/router'

const app = express()
app.set('port', process.env.PORT || config.port)

app.use('/', express.static('./public/'))

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json())
app.use(
  cors({
    origin: config.originUrl, //允许访问
    optionsSuccessStatus: 200,
  })
)

// routerUtils
app.use('/', router.routerUtils)

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`)
})
