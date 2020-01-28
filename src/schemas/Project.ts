import { Schema, model, Model, Document } from 'mongoose'

export interface ProjectModel extends Document{
  id: string
  title: string
  tasks?: [string]
}

const ProjectSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tasks: [String]
}, {
  timestamps: true
})

export const Project: Model<ProjectModel> = model('Project', ProjectSchema)
