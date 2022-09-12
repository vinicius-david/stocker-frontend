import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FormContainer, LinksContainer, Background } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const logInFormRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is required')
            .email('Email must be valid'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'info',
          title: 'Not yet implemented',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const anyError: any = err;
          const errors = getValidationErrors(anyError);

          logInFormRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Password recover error',
            description: 'Unable to send email with instructions, try again.',
          });
        }
      }
    },
    [addToast],
  );

  return (
    <>
      <Header />
      <FormContainer>
        <h2>Forgot password</h2>

        <strong>
          An email will be sent to you with instructions on resetting your
          password.
        </strong>
        <Form ref={logInFormRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button type="submit">Send email</Button>
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

export default ForgotPassword;
