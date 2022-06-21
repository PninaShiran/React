import axios from "axios"

export const addNewProduct =(product)=>{
  return axios.post("http://localhost:3001/product",product).then(res=>res.data); 
}

export const getAllProducts = ()=>{
   return axios.get("http://localhost:3001/product").then(res=>res.data);
}

export const deleteThisProduct = (id)=>{
   axios.delete("http://localhost:3001/product/"+id);
}

export const addNewUser = (user)=>{
   return axios.post("http://localhost:3001/user",user).then(res=>res.data);
}

export const checkUser = (guest)=>{
   return axios.post("http://localhost:3001/user/check",guest).then(res=>res.data);
}

export const sendNewOrder = (order)=>{
   axios.post("http://localhost:3001/order",order).then(res=>res.data);
}

