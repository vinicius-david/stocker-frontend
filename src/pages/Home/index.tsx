import React from 'react';
import { FiTrendingUp, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, ButtonsContainer, ButtonItem, Background } from './styles';

const Home: React.FC = () => (
  <>
    <Container>
      <h1>STOCKER</h1>
      <h3>
        Follow the main stocks and real estate funds on the market in a simple
        and practical way.
      </h3>

      <ButtonsContainer>
        <ButtonItem>
          <FiTrendingUp size={24} />
          <Link to="/stocks">Stocks</Link>
        </ButtonItem>
        <ButtonItem>
          <FiUser size={24} />
          <Link to="/login">Users</Link>
        </ButtonItem>
      </ButtonsContainer>
    </Container>
    <Background />
  </>
);

export default Home;
