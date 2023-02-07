import { GET_DATA } from "../Actiontype/Actiontype"

const initialState = {
post:[]
}

 const Reducer=(state = initialState, { type, payload }) => {
  switch (type) {
  
    
  case GET_DATA:
    return { ...state, post:payload }

  default:
    return state
  }
}
export default Reducer
