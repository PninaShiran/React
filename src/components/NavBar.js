import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { exitUser } from "../store/actions";

function NavBar() {
  let dispatch = useDispatch();
  let myUser = useSelector((state) => state.u.currentUser);
  let exit = () => {
    dispatch(exitUser());
  };
  return (
    <>
      {myUser === null && (
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <Link to="list" className="item">
              כל המוצרים
            </Link>
            <Link to="add-product" className="item">הוספת מוצר</Link>
            <Link to="register" className="item">
              הרשמה
            </Link>
            <Link to="categoryList" className="item">
              קטגוריה 
            </Link>
            <Link to="login" className="item">
              כניסה
            </Link>
          </div>
        </div>
      )}
      {myUser !== null && myUser.role === 2 && (
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <Link to="list" className="item">
              כל המוצרים
            </Link>

            <div className="item" onClick={exit}>
              יציאה
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
