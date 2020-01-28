import { Request, Response, NextFunction } from 'express'

class GlobalMiddlewares {
  private static requestCount: number

  public constructor () {
    GlobalMiddlewares.requestCount = 0
  }

  public logRequests (req: Request, res: Response, next: NextFunction): void {
    GlobalMiddlewares.requestCount += 1

    console.log(`At this moment the application received ${GlobalMiddlewares.requestCount} requests`)

    return next()
  }
}

export default new GlobalMiddlewares()
