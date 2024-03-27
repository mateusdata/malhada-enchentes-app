import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const Home = ({navigation}:any) => {
  return (
    <ScrollView className='flex-1 p-4'>
      <View className="bg-blue-100 border border-blue-400 rounded p-4">
        <Text className='text-lg text-center text-blue-600'>
          Alertas de Enchentes em Malhada, Bahia
        </Text>
        <Text className='mt-2'>
          Era uma vez, em uma pequena cidade chamada Malhada, localizada no coração da Bahia. A cidade era conhecida por sua beleza natural e pelo rio que a atravessava. No entanto, durante a estação chuvosa, o rio frequentemente transbordava, causando enchentes devastadoras.
        </Text>
        <Text className='mt-2'>
          Em uma dessas ocasiões, a chuva caiu incessantemente por dias a fio. O rio começou a subir, e logo as primeiras casas foram inundadas. Os moradores, acostumados com as inundações anuais, já haviam se preparado, mas ninguém esperava o que estava por vir.
        </Text>
        <Text className='mt-2'>
          A chuva continuou, e o rio continuou a subir. Em pouco tempo, toda a cidade estava debaixo d'água. As pessoas foram forçadas a abandonar suas casas e buscar refúgio em áreas mais altas.
        </Text>
        <Text className='mt-2'>
          Apesar da devastação, a comunidade se uniu. Eles ajudaram uns aos outros a encontrar abrigo, comida e água potável. Juntos, eles enfrentaram a adversidade e, eventualmente, a chuva parou.
        </Text>
        <Text className='mt-2'>
          Hoje, a
        </Text>
      </View>
      <Button onPress={()=> navigation.navigate("Alert")  } className='mt-5 bg-blue-500' mode='contained'>Alerta</Button>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default Home;
