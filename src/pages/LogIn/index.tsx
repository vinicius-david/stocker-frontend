import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FormContainer, LinksContainer, Background } from './styles';

interface LogInFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const logInFormRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { logIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: LogInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail is required')
            .email('E-mail must be valid'),
          password: Yup.string().required('Password is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        logIn({ email: data.email, password: data.password });

        addToast({
          type: 'success',
          title: 'Login Successful',
        });

        history.push('/stocks');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const anyError: any = err;
          const errors = getValidationErrors(anyError);

          logInFormRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Auth error',
            description: 'Unable to login, check your credentials.',
          });
        }
      }
    },
    [logIn, addToast, history],
  );

  return (
    <>
      <Header />
      <FormContainer>
        <h2>Welcome back to Stocker!</h2>

        <strong>Login</strong>
        <Form ref={logInFormRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Password"
          />
          <Button type="submit">Login</Button>
        </Form>

        <LinksContainer>
          <Link to="/register">Register</Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </LinksContainer>
      </FormContainer>
      <Background />
    </>
  );
};

export default LogIn;
