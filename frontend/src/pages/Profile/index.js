import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />

        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua nova senha"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Digite sua nova senha novamente"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do goBarber</button>
    </Container>
  );
}
