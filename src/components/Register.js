import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewUser } from '../api';
import { enterUser } from '../store/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Register() {
  const [formData, setFormData] = useState({
    role:'',
    name: '',
    password: '',
    email: '',
    phone: '',
    id:'',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (values) => {
    // Make the API request and handle the response
    const user = addNewUser(values);
    dispatch(enterUser(user));

    alert(`פרטיך נשמרו בהצלחה!\nברוך הבא לאתרינו! מקווים שתהנה!`);
    navigate('/list');
  };

  return (
    <div>
      <h1>הרשמה</h1>
      <Formik
        initialValues={formData}
        validate={(values) => {
          const errors = {};
          if (values.role === 'מנהל') values.role = 1;
          if (values.role === 'משתמש רשום') values.role = 2;
          if (!values.name) {
            errors.name = 'שדה זה הוא חובה!';
          }
          if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)) {
            errors.password = 'סיסמה חייבת להכיל לפחות ספרה אחת ואות גדולה וקטנה אחת, ולפחות 8 תווים או יותר';
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'כתובת המייל אינה תקינה!';
          }
          if (!/^0+[0-9]{2}-[0-9]{3}-[0-9]{4}$/i.test(values.phone)) {
            errors.phone = 'מספר טלפון לא תקין! המספר חייב ספרות באורך 10 ולהתחיל בסיפרה- 0!';
          }
          if (!/^\d{8}$/.test(values.id)) {
            errors.id = 'מספר תעודת הזהות לא תקין המספר צריך להתחיל עם ספרת הבקורת'
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>שם:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label>תעודת זהות:</label>
            <Field type="id" name="id" />
            <ErrorMessage name="id" component="div" />
          </div>
          <div>
            <label>סיסמה:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>מייל:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>טלפון:</label>
            <Field type="tel" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </div>
          <button type="submit" className="ui button">
            הרשם
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
