import axios from "axios";
import { FormData } from "../components/CreateProduct";

const baseUrl: string = process.env.REACT_APP_BASE_URL || ''

export const postProduct = (data: FormData) =>{
  return axios.post(`${baseUrl}products/`, data)
}

export const getProducts = () =>{
  return axios.get(`${baseUrl}products/`)
}

export const deleteProduct = (id: number) =>{
  return axios.delete(`${baseUrl}products/${id}`)
}