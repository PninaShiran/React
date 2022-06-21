import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendNewOrder } from "../api";
import { saveCurrentOrder, sendOrder } from "../store/actions";

function Order() {
    let order = useSelector(s=>s.s.currentOrder);
    let arr = useSelector(s=>s.s.orderArr);
    let [myUser,setMyUser] = useState({...order,orderedProducts:arr,orderDate:new Date(), dueDate:null}||{customerId:'', name:'', mail:'', role:'', city:'', street:'', numHouse:'', phone:'',orderedProducts:arr,orderDate:new Date(), dueDate:null});  
    let [isOk,setIsOk]=useState(true);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const change = (e)=>{
        setMyUser(ord=>{return{...ord,[e.target.name] : e.target.value}});
        if(e.target.name=='dueDate'){
          let thisDate = new Date();
          thisDate.setDate(thisDate.getDate()+4);
          let checkDate =new Date(e.target.value)
          if(checkDate<thisDate)
              setIsOk(false);
          else
              setIsOk(true);
        }
    }
    let sendThisOrder = ()=>{
      if(isOk){
         dispatch(sendOrder());
        sendNewOrder(myUser);
        alert(`הזמנתך התקבלה! תודה שרכשת אצלינו, נשמח לראותך שוב\nהמשך יום נעים!`);
      }  
    } 
    let continueBuy = ()=>{
        dispatch(saveCurrentOrder(myUser));
        navigate("/list");
    }
    return (
        <form className="ui form">
  <h4 className="ui dividing header">ביצוע ההזמנה</h4>
  <div className="field">
    <label>שם</label>
    <div className="two fields">
      <div className="field">
        <input type="text" name="name" onChange={change} value={myUser.name} placeholder="שם"/>
      </div>
      <label>טלפון</label>
      <div className="field">
        <input type="text" name="phone" onChange={change} value={myUser.phone} placeholder="טלפון"/>
      </div>
    </div>
  </div>
  <div className="field">
    <label>כתובת לשליחה</label>
    <div className="fields">
      <div className="twelve wide field">
        <input type="text" name="street" onChange={change} value={myUser.street} placeholder="רחוב"/>
      </div>
      <div className="four wide field">
        <input type="text" name="numHouse" onChange={change} value={myUser.numHouse} placeholder="מספר דירה"/>
      </div>
    </div>
  </div>
  <div className="two fields">
    <div className="field">
      <label>עיר</label>
      <select name="city" onChange={change} value={myUser.city} className="ui fluid dropdown">
        <option value="">עיר</option>
    <option value="נתניה">נתניה</option>
    <option value="ירושלים">ירושלים</option>
    <option value="בני-ברק">בני ברק</option>
    <option value="חיפה">חיפה</option>
      </select>
    </div>
    </div>
    <div>
    <label>תאריך יעד:</label>
    <input type="date" placeholder="הכנס תאריך יעד לשליחת המוצר" name="dueDate" onChange={change}/>
    {isOk? <span>תאריך למשלוח החל מ-4 ימים ממועד ההזמנה </span>:<span>תאריך זה אינו תקין!</span>}
    </div>
   <h4 className="ui dividing header">קבלה</h4>
   <div className="field">
    <label>שלח קבלה אל:</label>
    <div className="ui fluid">
      <input type="email" name="mail" placeholder="הכנס כתובת מייל" onChange={change} value={myUser.mail}/>
    </div>
  </div>
  <input type="button" value="בצע הזמנה" className="ui button" onClick={sendThisOrder} />
  <input type="button" value="המשך לקנות" className="ui button" onClick={continueBuy}/>
</form>
    );
}

export default Order;