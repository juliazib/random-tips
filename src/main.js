import express from 'express'

const app = express()

app.use(express.json())

import create from './Controllers/create.js'
import tips from './Controllers/tips.js'

create(app)
tips(app)

app.listen(3000)