import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadAppointmets();
  }, []);

  async function loadAppointmets() {
    const response = await api.get('appointments');

    setAppointments(response.data.reverse());
  }

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment => {
        appointment.id === id
          ? { ...appointment, canceled_at: response.data.canceled_at }
          : appointment;
      })
    );
  }

  function handleRefresh() {
    setRefreshing(true);
    loadAppointmets();
    setRefreshing(false);
  }
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          refreshing={refreshing}
          onRefresh={() => handleRefresh()}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
