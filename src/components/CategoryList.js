import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../api";
import { saveCategory } from "../store/actions";
import Category from "./Category"; // Make sure to import the Category component
import { useNavigate } from "react-router-dom";
function CategoryList() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCategory();
        dispatch(saveCategory(response));
        console.log(response);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    }
    fetchData();
  }, [dispatch]);

  const categories = useSelector((state) => state.c.categories);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => (
        <div>
          <Category key={category.id} show={category} />
        </div>
      ))}
        <input type="button" className="ui button" value="הוספת קטגוריה" onClick={()=> {navigate("/addCategory"); }} />
    </div>
  );
}

export default CategoryList;
