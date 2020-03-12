/*
 * @Author: ndzy
 * @Date: 2020-03-12 10:19:37
 * @LastEditTime: 2020-03-12 10:21:17
 * @LastEditors: ndzy
 */
import * as express from 'express'
import formatData from '../utils/formatDate'

const routerUtils = express.Router()
routerUtils.use(function(req, res, next) {
  console.log(`${formatData(new Date())}-----${req.path}-------${req.method}`)
  next()
})

export default routerUtils
