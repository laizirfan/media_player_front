import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap';
import { addCategoryApi, deleteCategoryApi, getAVideo, getAllCategoryApi, updateCategoryApi } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Category({dragOutVideoStatus,setVideoDragOutStatus}) {
const [show, setShow] = useState(false);
const[categoryName,setCategoryName] = useState("")
const[allCategory,setAllCategory] =useState([])
const[addCategorystatus,setAddCategoryStatus] =useState(false)
const[deleteCategorystatus,setDeleteCategoryStatus]= useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  



  //fn to add category

  const handleAddCategory = async()=>{
          
    let reqbody = {
      category : categoryName,
      allVideo : []
    }

    if(allCategory.length==0){
      const result = await addCategoryApi(reqbody)
      console.log(result);
     if(result.status >= 200 && result.status < 300){
      toast.success('Cateogory added successfully')
      setCategoryName("")
      setAddCategoryStatus(true)
      handleClose()
    
     }
     else{
      toast.error('Something went wrong')
     }
    }
    else{
      const existCat=allCategory.find((item)=>item.category==categoryName)
      if(existCat){
        toast.warning('Category Already Exist')
        setCategoryName("")
        handleClose()
      }
      else{
        const result = await addCategoryApi(reqbody)
        console.log(result);
       if(result.status >= 200 && result.status < 300){
        toast.success('Cateogory added successfully')
        setCategoryName("")
        setAddCategoryStatus(true)
        handleClose()
      
       }
       else{
        toast.error('Something went wrong')
       }

      }
    }

/*
  
      const result = await addCategoryApi(reqbody)
      console.log(result);
     if(result.status >= 200 && result.status < 300){
      toast.success('Cateogory added successfully')
      setCategoryName("")
      setAddCategoryStatus(true)
      handleClose()
    
     }
     else{
      toast.error('Something went wrong')
     }
       */

  }

  //fn to get all category

  const getAllCategory = async()=>{
    const result = await getAllCategoryApi ()
    setAllCategory(result.data)

  }
  console.log(allCategory);


  ///to delete in category
  const handleDelete = async(id)=>{
    const result = await deleteCategoryApi(id)
    console.log(result);
    if(result.status >= 200 && result.status < 300){
      setDeleteCategoryStatus(true)
     

    }
    else{
      toast.error('Something went wrong')
     }
  }

//fn to prevent data lost
const dragover=(e)=>{
  e.preventDefault()
}

//function to drop
const videoDrop= async(e,categoryID)=>{
  console.log('inside drop function');
  console.log(`category id is ${categoryID}`);
  const videoID = e.dataTransfer.getData("videoID")
  console.log(videoID);

  /// api to get details of video dragged
 const {data} = await getAVideo(videoID)
 console.log(data);

 const selectCategory = allCategory.find(item=>item.id==categoryID)
 if(selectCategory.allVideo.find(item=>item.id==data.id)){
  toast.error('already exist')
 }
 else{
  selectCategory.allVideo.push(data)
 }

 await updateCategoryApi(categoryID,selectCategory)
 getAllCategory()

}


// fn to send details of card  to view
const dragStart = (e,categoryID,videoID)=>{
  console.log(categoryID);
  console.log(videoID);
  let sharedData={
    categoryID,
    videoID
  }
  e.dataTransfer.setData("sharedData",JSON.stringify(sharedData))
}
   console.log(allCategory);
  useEffect(()=>{
    getAllCategory()
    setAddCategoryStatus(false)
    setDeleteCategoryStatus(false)
    setVideoDragOutStatus(false)
   
    
  },[addCategorystatus,deleteCategorystatus,dragOutVideoStatus])

  return (
    <>
      <div className='d-flex align-tems-center justify-content-center mt-5 mt-md-0'>
        <button className='btn btn-warning w-100' onClick={handleShow} >Add New Category</button>
      </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faPen} className='text-warning' /> Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className='my-3 border rounded p-3 shadow'>
            <label htmlFor="cname">Category Name</label>
            <input id='cname' type="text" className='form-control mt-2' placeholder='Enter Category Name' onChange={(e)=>setCategoryName(e.target.value)} />
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

{  allCategory?.length>0? 
    allCategory?.map((cat)=>(
      <div className='border border-secondary w-100 p-3 rounded mt-3' droppable="true" onDragOver={(e)=>dragover(e)} 
      onDrop={(e)=>videoDrop(e,cat.id)} >
      <div className='d-flex justify-content-between align-items-center'>
        <p>{cat.category}</p>
        <button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(cat.id)} /></button>
      </div>

        <Row>
         
      {cat.allVideo.length>0? 
      cat.allVideo.map((card)=>( <Col sm={12} draggable onDragStart={(e)=>dragStart(e,cat.id,card.id)}>
        <VideoCard displayVideo={card}
      isPresent={true}/>
  </Col>))
     :null
      }
              
        </Row>

    </div>)) 
       :
    <p className='text-warning mt-5'>No Category added yet</p>}

    <ToastContainer theme='colored' position='top-center' autoClose={2000} />
      
    </>
  )
}

export default Category