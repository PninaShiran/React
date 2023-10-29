import { useDispatch } from "react-redux";
import { addNewCategory } from "../api";
import { addCategory } from "../store/actions";
import { useNavigate } from "react-router-dom";
function AddCategory() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let myCategory = {};
  const change = (e) => {
    myCategory[e.target.name] = e.target.value;
  };
  const add = (e) => {
    e.preventDefault();
    let newCategory = addNewCategory(myCategory);
    dispatch(addCategory(newCategory));
    console.log(myCategory,"bjhj");
    alert("המוצר התווסף בהצלחה!");
    navigate("/categoryList");
  };
  return (
    <>
      <form>
        <label>ID קטגוריה:</label>
        <input
          type="text"
          placeholder="קטגוריה ID המוצר"
          name="Id"
          onChange={change}
        />
        <label>שם הקטגוריה:</label>
        <input
          type="text"
          placeholder="הכנס שם קטגוריה"
          name="Name"
          onChange={change}
        />
        <input type="submit" value="הוספת קטגוריה" onClick={add} />
      </form>
    </>
  );
}
export default AddCategory;
