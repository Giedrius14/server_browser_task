import React from 'react';
import styles from './LoginPage.module.scss';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import api from '../../api';
import { LoginForm } from '../../interfaces/LoginForm';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPage = (props: any) => {
  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      username: 'tesonet',
      password: 'partyanimal',
    } as LoginForm,
    validationSchema,
    onSubmit: ({ username, password }) => {
      api.login(username, password).then(() => {
        const { from } = props.history.location.state || {
          from: { pathname: '/' },
        };
        props.history.push(from);
      });
    },
  });

  return (
    <div className={styles.LoginPage} data-testid="LoginPage">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...getFieldProps('username')}
            className={
              touched.username && errors.username ? styles.inputError : ''
            }
          />
          {touched.username && errors.username && (
            <div className={styles.inputFeedback}>{errors.username}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...getFieldProps('password')}
            className={
              touched.password && errors.password ? styles.inputError : ''
            }
          />
          {touched.password && errors.password && (
            <div className={styles.inputFeedback}>{errors.password}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
