import axios from 'axios'
import { GET_DATA } from '../Actiontype/Actiontype'

export const get_data=()=>async(dispatch)=>{
    const res=await axios.get('http://localhost:4555/api/getAllPost')
    dispatch({type:GET_DATA,payload:res.data})
}

export const post_data=(data)=>async (dispatch)=>{
    console.log(data)
try {
const res=await axios.post('http://localhost:4555/api/createposte',data) 
dispatch(get_data())  
} catch (error) {
   console.log(error) 
}
}
export const update_data=(id,data)=> async (dispatch)=>{
    console.log(id,"rrrr",data)
    try { 
        const res=await axios.put('http://localhost:4555/api/updatePost/'+id,data)
        dispatch(get_data())
    } catch (error) {
        console.log(error) 
    }
}

