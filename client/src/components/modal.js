import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './modal.css'
import axios from 'axios';
import {post_data, update_data} from '../redux/Action/Action'
import { useDispatch } from 'react-redux';

function Example({element}) {
  const [show, setShow] = useState(false);
  const [title,setTitle]= useState(element.title)
  const [description,setDescription]=useState(element.description)
  const [image,setImage]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    setShow(true)
  };
    const dispatch=useDispatch()
  const addpost=(async()=>{
    var data={}
    const formaData=new FormData()
    formaData.append('file',image)
    formaData.append('upload_preset','ml_default')
    await axios.post('https://api.cloudinary.com/v1_1/dzdidywni/upload',formaData).then((res)=>
    {
        data={
            title:title,
            description:description,
            image:res.data.url,
            likes:0,
            views:0
        }
    })
    dispatch(post_data(data))
    handleClose()
  })
const updateproduct=(async()=>{
  var id =element.id
  var data2={}
  const formaData=new FormData()
  formaData.append('file',image)
  formaData.append('upload_preset','ml_default')
  if(image.length){
  await axios.post('https://api.cloudinary.com/v1_1/dzdidywni/upload',formaData).then((res)=>
  {
     data2={
      title:title,
      description:description,
      image:res.data.url,
      likes:element.likes,
      views:element.views
    }
  })
  dispatch(update_data(id,data2))
  handleClose()
}else{
  data2={
    title:title,
    description:description,
    image:element.image,
    likes:element.likes,
    views:element.views
  }
  dispatch(update_data(id,data2))
  handleClose()
}
})
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(event)=>setTitle(event.target.value)} value={title}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" onChange={(event)=>setDescription(event.target.value)} value={description}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <input type='file' accept='image/*,.mp4' name='image-upload' id='input' onChange={(event)=>setImage(event.target.files[0])}  />
        <div className='label'>
            <label className='image-upload' htmlFor='input'>
            <AddAPhotoIcon/>
            {image.name?`${image.name}`:'choose your photo'}
                </label>
                
        </div>
      </Form.Group>
     



        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e)=>e.target.innerText==="addproduct"?addpost():updateproduct()}>
            {title!==element.title && description !== element.description && image.name ?"addproduct ":"save change"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;