
import {Card,Form} from 'react-bootstrap';
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { get_data ,update_data } from './redux/Action/Action';
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; 
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Example from './components/modal';


function BasicExample() {
  const dispatch=useDispatch();
  const [views,setViews]=useState(0)
  
  useEffect(()=>{

       dispatch(get_data())
    
  },[dispatch])
  // var like=0
  const handleLikes=(id,title,description,image,views,likes)=>{
    var data={}
    if(likes===0){
      ++likes
      ++views
    }else{
      likes=0
    }
    data={title,description,image,views,likes}



    dispatch(update_data(id,data))
  }
  const product=useSelector(state=>state.post)
  return (
    <div>
    {product.map((element)=>{
      return(
        <div key={element.id} id='product'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={element.image} />
        <Card.Body>
          <Card.Title>{element.title}</Card.Title>
          <Card.Text>
           {element.description}

          </Card.Text>
          <Example element={element}/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
           
            <button id='like' onClick={()=>handleLikes(element.id,element.title,element.description,element.image,element.views,element.likes)} ><ThumbUpIcon />{element.likes}</button>
            <label>

               <RemoveRedEyeIcon  style={{marginLeft:'100px'}} />
               {element.views}
            </label>
           </Form.Group>

        </Card.Body>
      </Card>
        
        </div>
      )


    })}
    </div>
  
  );
}

export default BasicExample;