import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser, FiMail, FiLock, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FormContainer, Background, LinksContainer } from './styles';

interface UpdateUserFormData {
  name: string;
  email: string;
  oldPassword: string;
  password?: string;
  passwordConfirmation?: string;
}

const Profile: React.FC = () => {
  const profileFormRef = useRef<FormHandles>(null);

  const { user, updateUser, logOut } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: UpdateUserFormData) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string()
            .required('Email is required')
            .email('Email must be valid'),
          oldPassword: Yup.string().required('Current password is required'),
          password: Yup.string(),
          passwordConfirmation: Yup.string()
            .when('password', {
              is: (value: string) => !!value.length,
              then: Yup.string()
                .required('Confirm new password')
                .min(3, 'At least 3 digits'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), undefined], 'Password must match'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, oldPassword, password } = data;

        const formData = {
          name,
          email,
          password: oldPassword,
          newPassword: password || null,
        };

        const response = await api.put(`/users/${user.id}`, formData);

        updateUser(response.data);

        addToast({
          type: 'success',
          title: 'Profile updated!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const anyError: any = err;
          const errors = getValidationErrors(anyError);

          profileFormRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Update error',
            description: 'Unable to update info, check your password.',
          });
        }
      }
    },
    [addToast, updateUser, user.id],
  );

  const handleLogout = useCallback(() => {
    logOut();
  }, [logOut]);

  return (
    <>
      <Header />
      <FormContainer>
        <h2>Update your profile</h2>

        <strong>Information</strong>
        <Form
          ref={profileFormRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="oldPassword"
            type="password"
            icon={FiLock}
            placeholder="Current password"
          />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="New Password"
          />
          <Input
            name="passwordConfirmation"
            type="password"
            icon={FiLock}
            placeholder="Repeat password"
          />
          <Button type="submit">Update</Button>
        </Form>

        <LinksContainer>
          <FiLogOut size={20} />
          <Link to="/profile" onClick={handleLogout}>
            Logout
          </Link>
        </LinksContainer>
      </FormContainer>
      <Background />
    </>
  );
};

export default Profile;
