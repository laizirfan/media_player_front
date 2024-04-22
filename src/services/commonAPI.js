import axios from "axios"



export const commonAPI= async(httpmethod,url,reqBody)=>{
  
    const reqConfiq ={
        method:httpmethod,
        url:url,
        data:reqBody,
        headers:{"Content-Type" : "application/json"}
    }





 return await axios(reqConfiq).then((result)=>{
    return result
  }).catch((err)=>{
     return err
  })

}