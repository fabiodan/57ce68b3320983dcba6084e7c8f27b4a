const port = process.env.PORT || 3000
const express = require('express')

const app = express()

app.set('port', port)
app.use('/', express.static(`${__dirname}/dist`))

// Send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on http://localhost:${port}/`)
})
