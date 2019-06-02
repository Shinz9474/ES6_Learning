const startupDebugger = require('debug')('app:startup')//This require returns a function which takes argument. 
//This argument is an arbitrary namespace. For passing parameter we use this syntax
const dbDebugger = require('debug')('app:db')
const config = require('config')
const morgan = require('morgan')
const logger = require('./middleware/logger')
const express = require('express')
const Joi = require('joi')
const helmet = require('helmet')
const testcase = require('./routes/testcase')
const home = require('./routes/home')
const app = express()

//---------In built middleware-----------//
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded( {extended : true} ));

//---------Code restructuring-----------//
app.use('/api/testcase', testcase)//For any routes starting with /api/testcase use this route: testcase
app.use('/', home)//For routes pointing to localhost:4000 use this route: home

//---------Custom middleware-----------//
app.use(logger.authenticate);
app.use(logger.log);

//---------Template Engine-----------//
app.set('view engine', 'pug');  //When we set this express will automatically internally load this module. No need to require
app.set('views', './views')     //Optional setting to give path to template

//---------Configuration-----------//
startupDebugger("Project name: "+config.get('name'))//For debugging messages to be flowing in console we create and env variable 
                                                    //DEGUB=app:startup or DEGUB=app:startup, app:db or DEGUB=app:*
                                                    //We can set DEBUG at run time => DEGUB=app:startup nodemon index.js
startupDebugger("Password "+config.get('application.password'))

//----------ENVIRONMENT------------//
if(app.get('env') === 'development'){
    app.use(morgan('common'))
}

dbDebugger(`NODEW_ENV: ${process.env.NODE_ENV}`)
dbDebugger(`app: ${app.get('env')}`)
const port = process.env.PORT || 3000
app.listen(port, ()=> `Listening at port: ${port}`)
