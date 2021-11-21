import React from 'react';
import { View,Text,Image,TouchableOpacity  } from 'react-native';
import Styles from '../Styles/Styles';

const Item = (item) => {
    const {nombre,Consultorio,Especialidad,func} = item
  return (
    <TouchableOpacity onPress={() => func}>
      <View style={[Styles.containerShadow, Styles.containerColor]}>
        <Text>Nombre: {nombre}</Text>
        <Text>Consultorio: {Consultorio}</Text>
        <Text>Especialidad: {Especialidad}</Text>
      </View>
      </TouchableOpacity>
  );
};

export default Item;