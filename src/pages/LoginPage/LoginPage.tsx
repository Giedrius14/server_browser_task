import React from 'react';
import styles from './LoginPage.module.scss';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';

const LoginPage = (props: any) => {
  return (
    <div className={styles.LoginPage} data-testid="LoginPage">
      <Formik
        initialValues={{
          username: 'tesonet',
          password: 'partyanimal',
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('Username is required'),
          password: Yup.string()
            .min(4, 'Password must be at least 4 characters')
            .required('Password is required'),
        })}
        onSubmit={({ username, password }) => {
          console.log('fields', username, password);
          axios
            .post('https://playground.tesonet.lt/v1/tokens', {
              username,
              password,
            })
            .then((user) => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              sessionStorage.setItem('user', JSON.stringify(user));
              // setAuth(user);

              console.log(props);
              // // get return url from location state or default to home page
              const { from } = props.history.location.state || {
                from: { pathname: '/' },
              };
              props.history.push(from);
            });
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                name="username"
                type="text"
                className={
                  'form-control' +
                  (errors.username && touched.username ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={
                  'form-control' +
                  (errors.password && touched.password ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">
                Login
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  );
};

export default LoginPage;
