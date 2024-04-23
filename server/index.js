import express from 'express'

const port = process.env.PORT ?? 3002

const app = express()

app.get('/', (req, res) => {
  res.send('<h1> This is real Chat</h1>')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})