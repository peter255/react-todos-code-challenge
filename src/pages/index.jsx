import React from 'react';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function IndexPage() {
  return (
    <main>
      <Header />
      <ContentContainer>
        <TodoForm />
        <TodoList />
      </ContentContainer>
    </main>
  );
}

export default IndexPage;
