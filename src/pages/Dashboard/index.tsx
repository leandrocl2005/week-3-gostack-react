import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/24196521?s=460&u=b194dea68bab0e7ae875fb765d83ff59b5093653&v=4"
            alt="Leandro Cruvinel"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Aprendendo react like a boss!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/24196521?s=460&u=b194dea68bab0e7ae875fb765d83ff59b5093653&v=4"
            alt="Leandro Cruvinel"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Aprendendo react like a boss!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/24196521?s=460&u=b194dea68bab0e7ae875fb765d83ff59b5093653&v=4"
            alt="Leandro Cruvinel"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Aprendendo react like a boss!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
