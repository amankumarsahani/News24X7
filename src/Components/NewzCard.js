import React from 'react'

export default function NewzCard(props) {
  
  return (
    <div data-theme={props.mode}>
      <div className='container d-flex justify-content-center'>
                <div className="card" >
                  <div style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          position: 'absolute',
                          right: '0'
                      }
                      }> 
                        <span className="badge rounded-pill bg-danger"> {props.source} </span>
                    </div>
                    <img src={props.imageUrl!==null?props.imageUrl:"https://source.unsplash.com/random/800x500"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title?props.title.slice(0,80):"Can't Load Newz"}</h5>
                        <p className="card-text">{props.description?props.description.slice(0,160):"To Read Newz ontent Click on the Link given below."}.....</p>
                        <p className="card-text" ><small className=" card-author" >By {props.author ? props.author: 'Unknown'} on {new Date(props.time).toGMTString()}</small></p>
                        <a href={props.newzUrl} className={`btn btn-primary btn-sm ${props.mode==='light'?'btn-primary':'btn-dark'}`}>Read More</a>
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

NewzCard.defaultProps = {imageUrl: 'https://source.unsplash.com/random'}
