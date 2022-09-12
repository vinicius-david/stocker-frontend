import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FormContainer, LinksContainer, Background } from './styles';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const Register: React.FC = () => {
  const logInFormRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string()
            .required('Email is required')
            .email('Email must be valid'),
          password: Yup.string().min(3, 'At least 3 digits'),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Different passwords',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        addToast({
          type: 'success',
          title: 'Register Successful',
        });

        history.push('/login');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const anyError: any = err;
          const errors = getValidationErrors(anyError);

          logInFormRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Register error',
            description: 'Unable to register, try again.',
          });
        }
      }
    },
    [addToast, history],
  );

  return (
    <>
      <Header />
      <FormContainer>
        <h2>Welcome to Stocker!</h2>

        <strong>Register</strong>
        <Form ref={logInFormRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Password"
          />
          <Input
            name="passwordConfirmation"
            type="password"
            icon={FiLock}
            placeholder="Repeat password"
          />
          <Button type="submit">Register</Button>
        </Form>

        <LinksContainer>
          <FiArrowLeft size={20} />
          <Link to="/login">Back to login</Link>
        </LinksContainer>
      </FormContainer>
      <Background />
    </>
  );
};

export default Register;
