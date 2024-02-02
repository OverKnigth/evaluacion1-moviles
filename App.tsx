import React from 'react';import { SafeAreaView } from 'react-native';
import { BoxUno } from './src/screens/BoxUno';
import { BoxDos } from './src/screens/BoxDos';
import { BoxTres } from './src/screens/BoxTres';
import { BoxCuatro } from './src/screens/BoxCuatro';
import { BoxCinco } from './src/screens/BoxCinco';
import { BoxSeis } from './src/screens/BoxSeis';
import { BoxSiete } from './src/screens/BoxSiete';
import { BoxOcho } from './src/screens/BoxOcho';
import { BoxNueve } from './src/screens/BoxNueve';
import { Vectores } from './src/screens/Vectores';
//import Vectores from './src/screens/Vectores';

;

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxUno/> */}
      {/* <BoxDos/> */}
      {/* <BoxTres/> */}
      {/* <BoxCuatro/> */}
      {/* <BoxCinco/> */}
      {/* <BoxSeis/> */}
      {/* <BoxSiete/> */}
      {/* <BoxOcho/> */}
      {/* <BoxNueve/> */}
      <Vectores/>
      </SafeAreaView>
  );
};

export default App;
