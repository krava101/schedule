
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import AuthNav from '../../components/AuthNav/AuthNav';
import s from './Login.module.scss';
import * as Yup from 'yup';

const schema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
}

function Login() {

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
        </ul>
        <button className={s.submitBtn} type='submit'>Log in</button>
      </Form>
    </Formik>
    </div>
  )
}

export default Login;