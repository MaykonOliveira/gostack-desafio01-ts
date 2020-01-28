import { Router } from 'express'
import ProjectController from './controllers/ProjectController'
import ProjectMiddlewares from './middlewares/ProjectMiddlewares'

const routes = Router()

routes.get('/projects', ProjectController.index)

routes.post('/projects', ProjectController.store)

routes.put('/projects/:id', ProjectMiddlewares.verifyIdExistence, ProjectController.update)

routes.delete('/projects/:id', ProjectMiddlewares.verifyIdExistence, ProjectController.destroy)

routes.post('/projects/:id/tasks', ProjectMiddlewares.verifyIdExistence, ProjectController.storeTask)

export default routes
