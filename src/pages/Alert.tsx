import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Alert = () => {
  const cities = [
    { name: 'Carinhanha', forecast: 'Ensolarado', chanceOfRain: '10%' },
    { name: 'Manga Minas Gerais', forecast: 'Parcialmente nublado', chanceOfRain: '20%' },
    { name: 'Januária MG', forecast: 'Chuvoso', chanceOfRain: '70%' },
    { name: 'Janaúba MG', forecast: 'Ensolarado', chanceOfRain: '5%' },
    { name: 'Belo Horizonte MG', forecast: 'Nublado', chanceOfRain: '30%' },
    { name: 'Serra CA', forecast: 'Ensolarado', chanceOfRain: '0%' },
  ];

  return (
    <ScrollView>
      {cities.map((city, index) => (
        <Card key={index} style={{margin: 10}}>
          <Card.Content>
            <Title>{city.name}</Title>
            <Paragraph>Previsão: {city.forecast}</Paragraph>
            <Paragraph>Probabilidade de chuva: {city.chanceOfRain}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Alert;
