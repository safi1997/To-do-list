import React from 'react'

//the tasks to be done were rendered as a list in the todo item list component
function TodoListItem() {
  return (
  <ul data-testid="todo-list" className="list-group">
    <li className="list-group-item d-flex justify-content-between">go shopping<i className="bi bi-arrow-right-square-fill text-success"></i></li>
    <li className="list-group-item d-flex justify-content-between">school<i className="bi bi-arrow-right-square-fill text-success"></i></li>
    <li className="list-group-item d-flex justify-content-between">take drugs<i className="bi bi-arrow-right-square-fill text-success"></i></li>
    <li className="list-group-item d-flex justify-content-between">birthday party<i className="bi bi-arrow-right-square-fill text-success"></i></li>
    <li className="list-group-item d-flex justify-content-between">learn react<i className="bi bi-arrow-right-square-fill text-success"></i></li>
  </ul>
  )
}
export default TodoListItem