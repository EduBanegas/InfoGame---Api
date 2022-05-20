import express from 'express'
import routes from './routes'
import morgan from 'morgan'

// Settings server
const server = express()

// Settings middlewars
server.use(express.json())
server.use(morgan('dev'))

// Routes
server.use('/', routes)

// Error catching endware
server.use((err: any, _req: any, res: any, _next: any) => {
  const status = (Boolean(err.status)) || 500
  const message = (Boolean(err.message)) || err

  res.status(status).send(message)
})

export default server
