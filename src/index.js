/**
 * @flow
 */

import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import router from './routes'
import { errorHandler } from './middleware'

const app = new Koa()

if (app.env === 'development') {
  app.proxy = true
}

app.use(errorHandler())
app.use(cors())
app.use(helmet())
app.use(bodyParser())
app.use(router)

export default app
