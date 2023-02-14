import React from 'react'

//Completed tasks are listed and crossed out here
const IsDoneItem=()=>{
  return (
  <ul data-testid="is-done-item" className="list-group">
    <li className="list-group-item disabled d-flex justify-content-between"><s>milk</s><i className="bi bi-trash text-danger"></i></li>
    <li className="list-group-item disabled d-flex justify-content-between"><s>english exam</s><i className="bi bi-trash text-danger"></i></li>
    <li className="list-group-item disabled d-flex justify-content-between"><s>js practical exam</s><i className="bi bi-trash text-danger"></i></li>
  </ul>
  )
}

export default IsDoneItem