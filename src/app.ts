import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
import GlobalMiddlewares from './middlewares/GlobalMiddlewares'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    App.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(GlobalMiddlewares.logRequests)
  }

  private static database (): void {
    mongoose.connect('mongodb://localhost:27017/tsexample', { useNewUrlParser: true, useUnifiedTopology: true })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
