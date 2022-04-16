// import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Image, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { getProducts, deleteProduct } from '../service/productServices';

const mafSwal = withReactContent(Swal)
export interface IProduct {
  id: number,
  title: string,
  image: string | null | ArrayBuffer,
  likes: number
}

const ProductList: React.FC = () =>{
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>()

  useEffect(() => {

    setIsLoading(true)

    getProducts()
    .then(res => {
      setProducts(res.data)
      setIsLoading(false)
    })
    .catch(err =>{
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT
      });
      setIsLoading(false)
    })
  }, [])


  const deleteHandler = (id: number): void => {
    mafSwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true)
        deleteProduct(id)
        .then(res =>{
          
          const deleteSuccess = products?.filter(product => product.id !== id);
          setProducts(deleteSuccess)
          
          toast.success("Product delete successfully.", {
            position: toast.POSITION.TOP_RIGHT
          });
          setIsLoading(false)
        })
        .catch(err =>{
          toast.error("An error occurred. Please try again later.", {
            position: toast.POSITION.TOP_RIGHT
          });
          setIsLoading(false)
        })
      }
    })
  }


  if(isLoading)  return  <> Loading.... </>

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Likes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map(product =>
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>
                  <div style={{width: '60px'}}>
                  <Image
                      className="w-100"
                      src={`${product.image}`}
                      rounded
                    />
                  </div>
                </td>
                <td>{product.likes}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Button>Edit</Button>
                    <Button variant="danger" disabled={isLoading} className="ms-3" onClick={() => deleteHandler(product.id)}>Delete</Button>
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}

export default ProductList
