import React from 'react'
import Navebar from './Navebar'

const Addtodo = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <Navebar/>
            <center>
                <h1>
                    ADD here
                </h1>
                <br></br><br></br>
            </center>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">userId : </label>
                    <input type="text" className="form-control" /> 
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Id : </label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">title : </label>
                <input type="text" className="form-control" /> 
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">ADD</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Addtodo
