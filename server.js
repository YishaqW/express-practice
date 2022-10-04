// load the express framework
const express = require('express')

// create an instance of a express app
const app = express()

// The ROOT route
app.get('/', function(request, response){
  response.send('<h1>Hello Express</h1>')
})

// route 1
app.get('/posts', (req, res) => {
  res.send('<h3>Welcome</h3>')
})

app.get('/home', (req, res) => {
  res.send('<h1>Home Page</h1>')
})

app.post('/home', (req, res) => {
  res.send('<h1>Post Request</h1>')
})

// route 2
app.listen(3000, function(){
  console.log('Server listening in port: 3000')
})