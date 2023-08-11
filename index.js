import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Cloud Run 2')
})

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`)
})

app.listen(process.env.PORT || 4000, () => {
  console.log('Server listen on port', process.env.PORT || 4000)
})
