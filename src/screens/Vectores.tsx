import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const Vectores = () => {
  const [numeros, setNumeros] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  const [resultado, setResultado] = useState<{ pares: number[]; impares: number[] }>({
    pares: [],
    impares: [],
  });

  const clasificarNumeros = () => {
    const pares = numeros.filter((numero) => numero % 2 === 0);
    const impares = numeros.filter((numero) => numero % 2 !== 0);

    setResultado({ pares, impares });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vector:</Text>
      <Text style={styles.text2}>[{numeros.join(', ')}]</Text>
      <Button title="Clasificar Números" onPress={clasificarNumeros}/>

      {resultado.pares.length > 0 && (
        <View>
          <Text style={styles.text}>Números Pares: {resultado.pares.join(', ')}</Text>
        </View>
      )}

      {resultado.impares.length > 0 && (
        <View>
          <Text style={styles.text}>Números Impares: {resultado.impares.join(', ')}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8E3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        margin: 10,
    },
    text2: {
     fontSize: 22,   
     margin: 10,
     textAlign: 'center',
    }

});