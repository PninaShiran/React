import { useDispatch } from "react-redux";
import {addProduct} from "../store/actions";
import {addNewProduct} from "../api";
import { useNavigate } from "react-router-dom";
function AddProduct() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let myProduct = {}
    const change = (e)=>{
        myProduct[e.target.name] = e.target.value;
    }
    const add = (e)=>{
        e.preventDefault();
        let newProd = addNewProduct(myProduct);
        dispatch(addProduct(newProd));
        alert('המוצר התווסף בהצלחה!');
        navigate("/list");
    } 
    
    const cancel = ()=>{
         navigate("/list");
    }
    return (<>
        <h1>הוספת מוצר חדש</h1>
        <form>
            <div>
                <label>שם המוצר:</label>
                <input type="text" placeholder="הכנס שם מוצר" name="name" onChange={change}/>
            </div>
            <div>
                <label>תיאור המוצר:</label>
                <input type="text" placeholder="הכנס תיאור המוצר" name="description" onChange={change}/>
            </div>
            <div>
                <label>תמונה:</label>
                <input type="text" placeholder="הכנס כתובת תמונה של המוצר" name="img" onChange={change}/>
            </div>
            <div>
                <label>כמות:</label>
                <input type="number" placeholder="הכנס כמות המוצר" name="qty" onChange={change}/>
            </div>
            <div>
                <label>מחיר המוצר:</label>
                <input type="number" placeholder="הכנס מחיר המוצר" name="price" onChange={change}/>
            </div>
            <div>
                <label>חברה:</label>
                <input type="text" placeholder="הכנס חברת המוצר" name="company" onChange={change}/>
            </div>
            <div>
                <label>תאריך ייצור:</label>
                <input type="date" placeholder="הכנס תאריך ייצור המוצר" name="manufacturingDate" onChange={change}/>
            </div>
            <input type="submit" value="הוספת מוצר" onClick={add}/>
            <input type="button" value="ביטול" onClick={cancel}/>
        </form>
    </>);
}

export default AddProduct;