import { Request, Response } from 'express'
import { Project } from '../schemas/Project'

class ProjectController {
  public async index (req: Request, res: Response): Promise<Response> {
    const projects = await Project.find()
    return res.json(projects)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { id, title } = req.body

    const exist = await Project.findById(id)

    if (exist) {
      return res.status(400).json(`The project with id ${id} already exist`)
    }

    const project = await Project.create({ _id: id, title })
    return res.json(project)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { title } = req.body
    const { id } = req.params

    const project = await Project.findByIdAndUpdate(id, { title }, {
      new: true
    })

    return res.json(project)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    await Project.findByIdAndDelete(id)

    return res.json()
  }

  public async storeTask (req: Request, res: Response): Promise<Response> {
    const { title } = req.body
    const { id } = req.params

    const { tasks } = await Project.findById(id)
    tasks.push(title)

    const projectUpdated = await Project.findByIdAndUpdate(id, { tasks }, { new: true })
    return res.json(projectUpdated)
  }
}

export default new ProjectController()
