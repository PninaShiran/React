import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteThisProduct, getAllProducts } from "../api";
import { deleteProduct, saveProducts } from "../store/actions";
import Item from "./Item";
function List() {
    let dispatch = useDispatch();
    let myUser = useSelector(state=>state.u.currentUser);
     useEffect(()=>{
        getAllProducts().then(res => {
            dispatch(saveProducts(res));
        }).catch(err => {
            console.log(err);
        })
     },[])
    let arr = useSelector(state=>state.p.productArr);
  
    
    let deleteProd = (ind)=>{
        deleteThisProduct(ind);
        dispatch(deleteProduct(ind));
    }
    return (<div className="dives">
    {arr.map(item=>{return <div><Item key={item.id} show={item}/>
    <input type="button" className="ui button" value="מחיקת מוצר" onClick={()=>{deleteProd(item.id)}}/>
    </div>})}
    </div>);
}

export default List;