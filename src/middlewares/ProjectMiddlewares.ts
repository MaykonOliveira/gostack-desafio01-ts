import { Request, Response, NextFunction } from 'express'
import { Project } from '../schemas/Project'

class ProjectMiddlewares {
  public async verifyIdExistence (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { id } = req.params

    const exist = await Project.findById(id)

    if (!exist) {
      return res.status(400).json(`The project with id ${id} doesn't exist`)
    }

    next()
  }
}

export default new ProjectMiddlewares()
