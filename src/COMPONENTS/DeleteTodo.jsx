import React from 'react'
import Navebar from './Navebar'

const DeleteTodo = () => {
  return (
    <div>
      <div>
      <div className="conteiner">
        <div className="row">
            <Navebar/>
            <center>
                <h1>
                    cancellation
                </h1>
            </center>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                    <label htmlFor="" className="form-label">ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                    <button className="btn btn-danger">DELETE</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DeleteTodo
