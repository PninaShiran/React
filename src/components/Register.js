import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewUser } from '../api';
import { enterUser, saveCurrentOrder } from '../store/actions';

function Register() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    return (  
      <div>
        <h1>הרשמה</h1>
        <Formik
          initialValues={{name:'', password:'', mail:'', role:'', city:'', street:'', numHouse:'', phone:''}}
          validate={values => {
            const errors = {};
            if(values.role=="מנהל")
                values.role = 1;
            if(values.role=="משתמש רשום")
                values.role = 2;
            if (!values.name) {
                errors.name = 'שדה זה הוא חובה!';
            }
            if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)) {
              errors.password = 'סיסמה חייבת להכיל לפחות ספרה אחת ואות גדולה וקטנה אחת, ולפחות 8 תווים או יותר';
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
                errors.mail = 'כתובת המייל אינה תקינה!';
            }
            if (!values.city) {
                errors.city = 'שדה זה הוא חובה!';
            }
            if (!/^0+[0-9]{2}-[0-9]{3}-[0-9]{4}$/i.test(values.phone)) {
                errors.phone = 'מספר טלפון לא תקין! המספר חייב ספרות באורך 10 ולהתחיל בסיפרה- 0!';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              let user = addNewUser(values);
              dispatch(enterUser(user));
              dispatch(saveCurrentOrder(user));
              alert(`פרטיך נשמרו בהצלחה!\nברוך הבא לאתרינו! מקווים שתהנה!`);
              navigate("/list");
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
               <label>שם:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
              </div>
              <div>
              <label>סיסמה:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              </div>
              <div>
                  <label>מייל:</label>
              <Field type="email" name="mail" />
              <ErrorMessage name="mail" component="div" />
              </div>
              <div id="my-radio-group">תפקיד:</div>
              <div role="group" aria-labelledby="my-radio-group">
              <label>
              <Field type="radio" name="role" value="מנהל" />
              מנהל
             </label>
              <label>
              <Field type="radio" name="role" value="משתמש רשום" />
              משתמש רשום
              </label>
              </div>
              <div>
                כתובת:
              <div>
                  <label>עיר:</label>
              <Field type="text" name="city" />
              <ErrorMessage name="city" component="div" />
              </div>
              <div>
              <label>רחוב:</label>
              <Field type="text" name="street" />
              </div>
              <div>
              <label>מספר דירה:</label>
              <Field type="number" name="numHouse" />
              </div>
              </div>
              <div>
              <label>טלפון:</label>
              <Field type="tel" name="phone" />
              <ErrorMessage name="phone" component="div" />
              </div>
              <button type="submit" className="ui button" disabled={isSubmitting}>
                הרשם
              </button>
            </Form>
          )}
        </Formik>
      </div>);
}

export default Register;