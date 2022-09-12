import React, { useRef, useCallback } from 'react';
import { FiHome, FiUser, FiTrendingUp, FiSearch } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useStock } from '../../hooks/StockContext';
import Input from '../Input';

import { Header, HeaderContent, IconsContainer } from './styles';

interface searchFormData {
  search: string;
}

const Button: React.FC = () => {
  const searchFormRef = useRef<FormHandles>(null);

  const { setStock } = useStock();
  const history = useHistory();

  const handleSearchSubmit = useCallback(
    (input: searchFormData) => {
      setStock(input.search);
      history.push('/stocks');
    },
    [history, setStock],
  );

  return (
    <Header>
      <h1>STOCKER</h1>

      <HeaderContent>
        <Form ref={searchFormRef} onSubmit={handleSearchSubmit}>
          <Input name="search" placeholder="Search for a stock" />

          <button type="submit">
            <FiSearch size={24} />
          </button>
        </Form>

        <IconsContainer>
          <Link to="/">
            <FiHome size={24} />
          </Link>
          <Link to="/profile">
            <FiUser size={24} />
          </Link>
          <Link to="/stocks">
            <FiTrendingUp size={24} />
          </Link>
        </IconsContainer>
      </HeaderContent>
    </Header>
  );
};

export default Button;
