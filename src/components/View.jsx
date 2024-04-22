import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryApi, getUploadVideoApi, updateCategoryApi } from '../services/allAPI'


function View({videoUploadStatus,setVideoDragOutStatus}) {
  //js code

  const[video, setVideo]=useState([])

  const[deleteVideoStatus,setDeleteVideoStatus]= useState(false)

  const getVideo =async()=>{
    const response =await getUploadVideoApi()

    setVideo(response.data);

  }

         console.log(video);


    const Dragover = (e)=>{
    e.preventDefault()
    }    

    const videoDrop = async (e)=>{
     const {categoryID,videoID} = JSON.parse(e.dataTransfer.getData("sharedData"))
     console.log(categoryID,
      videoID);

         //to get all catgory from backend

    const {data} = await getAllCategoryApi()
    console.log(data);

    //get  category which have same the category ID

    let selectedCategory  = data.find((item)=>item.id==categoryID)
    let result=selectedCategory.allVideo.filter((item)=>item.id!=videoID)
     

    let reqBody={
      category:selectedCategory.category,
      allVideo:result,
      id:categoryID
    }
      ///update the category

      await updateCategoryApi(categoryID,reqBody)

      
      setVideoDragOutStatus(true)


    }

 

         
  useEffect(()=>{
    getVideo()
    setDeleteVideoStatus(false)
  },[videoUploadStatus,deleteVideoStatus,])

  return (
    <>
     <Row droppable="true" onDragOver={(e)=>Dragover(e)} onDrop={(e)=>videoDrop(e)}>
       {video?.length>0?
       video?.map((item)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
         <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>
       ))
        :
        
        <h5 className='text-warning mt-5'>No video uploaded yet</h5>}
     </Row>
    </>
  )
}

export default View