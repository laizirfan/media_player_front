//rfce
import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistoryApi, getAllVideoHistory } from '../services/allAPI'




function Watchhistory() {
  //state

  const[videoHistory,setVideoHistory] = useState([])
  const[deletevideostatus,setDeleteVideoStatus] = useState(false)
  
  
  const getAllvideo = async()=>{
     let response = await getAllVideoHistory()
     console.log(response);
     setVideoHistory(response.data)
  }


  // to delete

  const handleDelete = async(id)=>{
   const response = await deleteWatchHistoryApi(id)
   console.log(response);
   setDeleteVideoStatus(true)
  }

useEffect(()=>{
    getAllvideo()
    setDeleteVideoStatus(false)
},[deletevideostatus])
  
  return (
    <>
    <div className='d-flex align-item-center mx-4 mb-5 mt-5'>

      <h4> Watch History</h4>
      <Link to={'/home'} className='ms-auto' style={{textDecoration:'none'}}>
         <h5 > <FontAwesomeIcon className='me-2' icon={faArrowLeft} /> 
         <span id='back' >Back Home</span><FontAwesomeIcon className='ms-2' icon={faHouse} /></h5></Link>

    </div>

    <div className='row mx-4 mt-5'>
      <div className="col-md-1"></div>
      <div className="col-md-10 p-4 " style={{overflowX:'auto'}}>
       {videoHistory?.length>0?
       <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>CAPTION</th>
            <th>URL</th>
            <th> TIME STAMP</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
         { videoHistory?.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td><a href={item?.url} target='_blank'>{item?.url} </a></td>
          <td>{item?.timeStamp}</td>
          <td> <FontAwesomeIcon icon={faTrash} className='text-danger' onClick={()=>handleDelete(item?.id)}/></td>
          </tr>)) 
        }
        </tbody>

       </table> :
       <p className='text-warning mt-5 fs-5'>Watch history is clean</p>
}
      </div>


      <div className="col-md-1"></div>

    </div>
    </>
  )
}

export default Watchhistory