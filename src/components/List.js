import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteThisProduct, getAllProducts } from "../api";
import { addToCart, deleteProduct, saveProducts } from "../store/actions";
import Item from "./Item";
import SmallShoppingCart from "./SmallShoppingCart";
function List() {
    let [isShow, setIsShow] = useState(false);
    let dispatch = useDispatch();
    let myUser = useSelector(state=>state.u.currentUser);
    let amount = 0;
     useEffect(()=>{
        getAllProducts().then(res => {
            dispatch(saveProducts(res));
        }).catch(err => {
            console.log(err);
        })
     },[])
    let arr = useSelector(state=>state.p.productArr);
    let change = (e)=>{
        amount = e.target.value;
    }
    let close = (bool)=>{
        setIsShow(bool);
    }
    let addCart = (id)=>{
        if(amount>0){
            setIsShow(true);
            let selectProduct = arr.find(item=>item.id==id);
            selectProduct.amount = amount; 
            dispatch(addToCart(selectProduct));
        }
    }
    let deleteProd = (ind)=>{
        deleteThisProduct(ind);
        dispatch(deleteProduct(ind));
    }
    return (<div className="dives">
    {arr.map(item=>{return <div><Item key={item.id} show={item}/>
    {(myUser===null || myUser!==null && myUser.role===2) &&<><div>
    <label>כמות:</label>
    <input  type="number" min={1} max={10} onChange={change}/>
    </div>
    <input type="button" className="ui button" value="הוסף לסל" onClick={()=>{addCart(item.id)}}/>
    </>}
    {myUser!==null && myUser.role===1 &&
    <input type="button" className="ui button" value="מחיקת מוצר" onClick={()=>{deleteProd(item.id)}}/>}
    </div>})}
    {isShow && <SmallShoppingCart closeDialog={close}/>}
    </div>);
}

export default List;