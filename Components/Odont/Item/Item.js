import React from 'react';
import { View,Text,Image  } from 'react-native';
import Styles from '../Styles/Styles';

const Item = (item) => {
    const {id,nombre,Consultorio,Especialidad,img} = item
  return (
    <View style={[Styles.containerShadow, Styles.containerColor]}>
        <Image source={img} />
      <Text>Nombre: {nombre}</Text>
      <Text>Consultorio: {Consultorio}</Text>
      <Text>Especialidad: {Especialidad}</Text>
    </View>
  );
};

export default Item;