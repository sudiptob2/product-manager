import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { postProduct } from '../service/productServices';

export interface FormData {
  title: string;
  image: string | null | ArrayBuffer
}

const CreateProduct: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({ title: '', image: '' });
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null); 

  const convertBase64 = ( event: React.ChangeEvent<HTMLInputElement> ): void =>{

    let reader = new FileReader();
    reader.readAsDataURL(event.currentTarget.files![0]);

    reader.onload = () => {
      setFormData({...formData, image: reader.result || ''})
    };

  }

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ): void =>{

    e.preventDefault();
    setIsLoading(true)
    postProduct(formData)
    .then(res =>{
        setIsLoading(false)
        setFormData({
          ...formData,
          title: ''
        })
        inputRef.current!.value = ''
        toast.success("Product successfully created!", {
          position: toast.POSITION.TOP_RIGHT
        });
    })
    .catch(err =>{
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT
      });
      setIsLoading(false)
    })

  }


  const { title } = formData;
  return (
    <>
      <Card className="p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter title" 
              value={title}
              onChange = { (e) => setFormData({ ...formData, title: e.target.value })} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>File upload</Form.Label>
            <Form.Control 
              ref={inputRef}
              type="file" 
              placeholder="Upload a file" 
              onChange ={convertBase64}
            />
          </Form.Group>

          <Button variant="primary" disabled={isLoading} type="submit" >
            Add
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default CreateProduct
