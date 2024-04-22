import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from '../services/allAPI';



function Add({setVideoUploadStatus}) {
    const [show, setShow] = useState(false);

//to store state (input store onchange)
 
const[video,setVideo] = useState({
  caption:"",
  imageUrl:"",
  embededLink:"",
 
})

console.log(video);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



const getEmdedlink = (e)=>{
  const text = e.target.value
  //console.log(text);

  if(text.startsWith('https://www.youtu.be/')){
    const Link = `https://www.youtube.com/embed/${text.slice(17,28)}`
    setVideo({...video,embededLink:Link})
  }
  else{

    const link = `https://www.youtube.com/embed/${text.slice(-11)}`
    setVideo({...video,embededLink:link})
  }

}


//for fucntion upload

const handleUpload = async () => {
   const{caption,imageUrl,embededLink} = video

   if(!caption ||!imageUrl || !embededLink){
    toast.info('Please fill the form completly')

   }
   else{
    const response =await uploadVideoApi(video)
    console.log(response);


    if(response.status>=200 && response.status<300) {
     
      toast.success('Video upload success')
      setVideoUploadStatus(response.data)
      setVideo( {
          caption:"",
          imageUrl:"",
          embededLink:"",
        })
      handleClose()
    }
    else{
      console.log(response);
      toast.error('something went wrong')
    }

  
   }

}

  return (
       <>
    <div>
        <h5>Upload New Video 
            <FontAwesomeIcon    onClick={handleShow} icon={faCloudArrowUp} className='ms-2'/></h5>
    </div>
      
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Kindly fill  the following</p>   
         <form className='mt-3 border p-3 rounded'>

            <div className='mb-3'>
            <input type="text"   placeholder='Enter Video Caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            </div>
            <div className='mb-3'>
            <input type="text"    placeholder='Enter Image Url' className='form-control'onChange={(e)=>setVideo({...video,imageUrl:e.target.value})} />
            </div>
            <div className='mb-3'>
            <input type="text"   placeholder='Enter Youtube Video Link' className='form-control' onChange={(e)=>getEmdedlink(e)}/>
            </div>

         </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
           upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Add