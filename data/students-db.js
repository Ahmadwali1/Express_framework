const students = [
  {id: 1, name: 'Alex', present: true},
  {id: 2, name: 'bob', present: true},
  {id: 3, name: 'jhon', present: true},
]

module.exports = {
  getAll: function() {
    return students;
  }
}