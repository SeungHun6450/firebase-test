import * as admin from 'firebase-admin'
admin.initializeApp()

import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import todo from './routes/todo'
// import './jobs'

const app = express()
app.use(express.json())
// whitelist방식, 얘들만 허용한다!
app.use(cors({
  origin: [
    'kdt2-test-start.web.app',
    'kdt2-test-start.firebaseapp.com'
  ]
}))
app.use('/todo', todo)

export const api = functions
  .region('asia-northeast3')
  .https.onRequest(app)
// http://localhost:5001/kdt2-test-start/us-central1/api/todo
