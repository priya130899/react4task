import React from 'react'

function Types({data}) {
  return <>
    
    <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex"><i className={data.fullresponsive + " m-auto text-primary"}></i></div>
            <h3>{data.topic}</h3>
            <p className="lead mb-0">{data.description}</p>
        </div>
    </div>            
  </>
}

export default Types