import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideoApi } from '../services/allAPI';

function VideoCard({displayVideo,setDeleteVideoStatus,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);
    let caption = displayVideo?.caption
    let url =displayVideo?.embededLink
    let time = new Date()
     let timeStamp =new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
       
    console.log(caption,url,timeStamp);
    const reqBody ={
      caption,
      url,
      timeStamp
    }
    const response = await addToHistory(reqBody)
    console.log(response);
  };

  const handleDelete = async(id) =>{
    const response = await deleteVideoApi(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }

  const videoDrag = (e,id)=>{
    console.log('inside videoDrag');
    console.log(`dragged card is ${id}`);
    e.dataTransfer.setData("videoId",id)
  }


  return (
    <>
    <Card onClick={handleShow} style={{ width: '100%' }} className='mt-3 ms-1' draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)}>
      {!isPresent && <Card.Img   variant="top" src={displayVideo?.imageUrl} width={'100%'} height={'250px'} />}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Text style={{fontSize:"12px"}}>{displayVideo?.caption}</Card.Text>
       {!isPresent && <Button variant="danger"> <FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(displayVideo?.id)}/></Button>}
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="382" src={`${displayVideo?.embededLink}?autoplay=1`} title="Kuthanthram - Video Song | Manjummel Boys | Chidambaram | Sushin Shyam | Vedan | Parava Films" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      
      </Modal>
    </>
  )
}

export default VideoCard