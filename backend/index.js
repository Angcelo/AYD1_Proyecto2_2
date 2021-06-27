const express = require('express')
const app = express();
const cors = require('cors')
const puerto = 3030

const router = require('./router/rotuer')

app.use(cors())
app.use(express.json({limit:'5mb'}))
app.use(express.urlencoded({limit:'5mb',extended:false}))
app.set('port',puerto)
app.use('/',router)

app.listen(app.get('port'),()=>{
  console.log('Corriendo en el puerto: '+ puerto)
})

exports.app = app