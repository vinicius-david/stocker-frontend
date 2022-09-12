import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FormContainer, Background } from './styles';

interface ResetPasswordFormData {
  password: string;
  passwordConfirmation: string;
}

const ResetPassword: React.FC = () => {
  const logInFormRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        const schema = Yup.object().shape({
          password: Yup.string().min(3, 'At least 3 digits'),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Different passwords',
          ),
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
            title: 'Reset password error',
            description: 'Unable to reset your password, try again.',
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
        <h2>Reset password</h2>

        <strong>
          Define a new password to recover your access to Stocker.
        </strong>
        <Form ref={logInFormRef} onSubmit={handleSubmit}>
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="New password"
          />
          <Input
            name="passwordConfirmation"
            type="password"
            icon={FiLock}
            placeholder="Repeat password"
          />

          <Button type="submit">Reset</Button>
        </Form>
      </FormContainer>
      <Background />
    </>
  );
};

export default ResetPassword;
