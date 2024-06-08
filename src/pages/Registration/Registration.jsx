import { Formik, Field, Form, ErrorMessage, } from 'formik';
import s from './Registration.module.scss';
import * as Yup from 'yup';
import AuthNav from '../../components/AuthNav/AuthNav';

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required("Confirm password is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function Registration() {

  const handlerSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handlerSubmit}
      >
      <Form className={s.form} autoComplete="off">
        <AuthNav/>
        <ul>
          <li>
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder=""
              autoComplete="off"
            />
            <label>
              Enter your name
            </label>
            <ErrorMessage name="name" component="p" className={s.error} />
          </li>
          <li>
            <Field
              className={s.input}
              type="text"
              name="email"
              placeholder=""
              autoComplete="off"
            />
            <label>
              Enter your email
            </label>
            <ErrorMessage name="email" component="p" className={s.error} />
          </li>
          <li>
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder=""
              autoComplete="off"
            />
            <label>
              Enter password
            </label>
            <ErrorMessage name="password" component="p" className={s.error} />
          </li>
          <li>
            <Field
              className={s.input}
              type="password"
              name="confirmPassword"
              placeholder=""
              autoComplete="off"
            />
            <label>
              Confirm password
            </label>
            <ErrorMessage name="confirmPassword" component="p" className={s.error} />
          </li>
        </ul>
        <button className={s.submitBtn} type='submit'>Register</button>
      </Form>
    </Formik>
    </div>
  )
}

export default Registration;