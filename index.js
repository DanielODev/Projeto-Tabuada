const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//== espaço para importar os corollers do index controller
const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')

app.use(express.static('public'))

// view engine
//setar a pasta views como diretorio atual/views
app.set('views', path.join(__dirname, 'views'))
// setar a view engine como ejs
app.set('view engine', 'ejs')
//usar router do controller um lincador
app.use('/', indexRouter)
app.use('/tabuadas', tabuadaRouter)

//ouvir a porta 3000 criada acima
app.listen(port, () => console.log('Servidor do projeto tabuada rodando na porta ' + port))