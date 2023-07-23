const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// router imports
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// set up connection to Robot 3T
mongoose.connect("mongodb+srv://demo:coding123456@cluster0.a5cczij.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// shows once connection is open
mongoose.connection.once("once", () => {
  console.log("your DB connection is established")
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/assets', express.static(path.join(__dirname, 'views', 'assets')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
