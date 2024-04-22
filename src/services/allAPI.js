
// api for adding video
import { serverURL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

 export const uploadVideoApi = async(reqBody)=>{
  return  await commonAPI('POST',`${serverURL}/videos`,reqBody)

}

///api to get uploaded video

export const getUploadVideoApi = async()=>{
 return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video

export const deleteVideoApi = async(id) =>{
  return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//api to add history
 export const addToHistory= async(reqBody)=> {
   return await  commonAPI ('POST',`${serverURL}/history`,reqBody)
}

//api to get all video hiatory

export const getAllVideoHistory= async ()=>{
 return await commonAPI('GET',`${serverURL}/history`,"")
}

//api delete video from history

  export const deleteWatchHistoryApi = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
  }

  //api for category add

  export const addCategoryApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/category`,reqBody)
  }

  // api to get all category

  export const getAllCategoryApi = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
  }

  //api to delete categroy 

  export const deleteCategoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
  }

  //api to get a particular vide
export const getAVideo = async (id)=>{
  return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update cateogroy


export const updateCategoryApi = async(id,reqBody)=>{
  return await commonAPI('PUT',`${serverURL}/category/${id}`,reqBody)
}