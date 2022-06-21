import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../store/actions";
import { sum } from "../store/reducers";

function ShoppingCart() {
    let arr = useSelector(state=>state.s.orderArr);
    let cart = sum(arr);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let amountRef = useRef(null);
    let deleteProd = (id)=>{
        dispatch(removeFromCart(id));
    }
    let updateAmount = (id)=>{
        let selectProduct = arr.find(item=>item.id==id);
            selectProduct.amount = amountRef.current.value;
            dispatch(addToCart(selectProduct));
    }
    let finish = ()=>{
        navigate("/order");
    }
    return (<div>
      <div className="dives">
            {arr.map(item=>{return(<div>
                <div className="ui card" key={item.id}>
                <div className="image">
                  <img src={item.img}/>
                </div>
                <div className="content">
                  <h2>{item.name}</h2>
                  <div className="description">{item.discription}</div>
                  <div className="meta">
                    <span className="date">{`מחיר ליחידה:  ${item.price} ₪`}</span>
                    <h4>{`סה"כ:  ${item.price*item.amount} ₪`}</h4>
                    <h4>{`סה"כ יחידות: ${item.amount}`}</h4>
                  </div>
                </div>
              </div>
              
              <div>
                <label>עדכן כמות:</label>
                <input type="number" min={1} max={10} value={item.amount} ref={amountRef} onChange={()=>{updateAmount(item.id)}}/>
                </div>
              <input type="button" className="ui button" value="הסר מוצר" onClick={()=>{deleteProd(item.id)}}/>
              </div>
            )})}</div>
            <div>
            <h3>{`סה"כ לתשלום:  ${cart.sum} ₪`}</h3>
            <h3>{`סה"כ כמות המוצרים:  ${cart.cnt}`}</h3>
            <input type="button" value="סיום הזמנה" className="ui button" onClick={finish}/>
        </div>

    </div>);
}

export default ShoppingCart;