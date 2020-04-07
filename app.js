var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const fileUpload = require('express-fileupload')
const db = require('./db/dal-mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* Routes for the main profile */
const apiUsersRouter = require('./routes/api/v1/api-users')
const apiAuthRouter = require('./routes/api/v1/api-auth')
const apiProjectsRouter = require('./routes/api/v1/api-projects')
const apiTextsRouter = require('./routes/api/v1/api-texts')
const reactRouter = require('./routes/react')

/* Routes for other apps */
const eventSchedulerApiEventsRouter = require('./routes/event-scheduler/api/v1/api-events')

var app = express();

db.connect()
  .then(connection => {
    console.log("Connected to db")

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(cors())
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(fileUpload())

    // app.use(function (req, res, next) {
    //   console.log(req.url)
    //   next()
    // })

    app.use('/public', express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'react')));

    /* for the profile app */

    app.use('/users', usersRouter);
    app.use('/api/v1/users', apiUsersRouter)
    app.use('/api/v1/auth', apiAuthRouter)
    app.use('/api/v1/projects', apiProjectsRouter)
    app.use('/api/v1/texts', apiTextsRouter)

    /* for scheduler app */
    app.use('/scheduler/api/v1/events', eventSchedulerApiEventsRouter)

    // !!This goes after all other routes!!
    // here we direct users back to
    // index.html if they try to type in
    // an address in the url bar
    app.use('/', reactRouter)

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
      console.log("Express error handler ********")

      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error'); //error  if err render the index
    });

    // clean up function
    process.on('SIGINT', () => {
      db.close()
      console.log('DBClosed')
      process.exit()
    })

  })
  .catch(error => {
    console.error(error)
  })

module.exports = app;
