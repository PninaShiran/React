import axios from "axios"



export const addNewRecipe =(product)=>{
  return axios.post("http://localhost:8080/api/recipe",product).then(res=>res.data); 
}

export const getAllProducts = ()=>{
   return axios.get("http://localhost:8080/api/recipe").then(res=>res.data);
}

export const deleteThisProduct = (id)=>{
   axios.delete("http://localhost:3001/product/"+id);
}

export const addNewUser = (user)=>{
   return axios.post("http://localhost:3001/user",user).then(res=>res.data);
}
export const checkUser = async ({ Username: nameUser, Password: password }) => {
   try {
     const response = await axios.post('http://localhost:8080/api/user/login', {
       Username: nameUser,
       Password: password,
     });
     return response.data;
   } catch (error) {

     throw error;
   }
 };

 export const getCategory = () => {
  return axios.get("http://localhost:8080/api/category").then((res) => res.data);
};
 export const addNewCategory = (category)=>{
  return axios.put("http://localhost:8080/api/category",category).then(res=>res.data);
  }
