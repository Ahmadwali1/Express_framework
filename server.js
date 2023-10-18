//load exprees
const exprees = require('express');
const path  = require('path');
//require the Database
const todoDb = require('./data/todo-db');
const student = require('./data/students-db');

//create our express app
const app = exprees();

//configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)

// mount route

//Define a "root" route directly on app
app.get('/', function (req, res) {
  res.send("<h1>Hello Exprees!</h1>");
});

app.get('/home', function (req, res) {
  res.render('home');
});

app.get('/todos', function(req, res) {
  res.render('todos/index', {
    todos: todoDb.getAll()
  });
});

app.get('/students', function(req, res){
  res.render('students/index', {
    students: student.getAll()
  });
})

// Tell the app to listen on port 3000
// for HTTP request from clients
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
