import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxUno = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.boxPurple}></Text>
        <Text style={styles.boxOrange}></Text>
        <Text style={styles.boxCyan}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B60B0',   
    },
    boxPurple: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderColor: 'white',  
        borderWidth: 5,
        alignSelf: 'flex-end',
    },
    boxOrange: {
        width: 100,
        height: '75%',
        backgroundColor: 'orange',   
        borderColor: 'white',
        borderWidth: 5,
        alignSelf: 'flex-end',
    },
    boxCyan: {
        width: 100,
        height: 100,
        backgroundColor: '#80BCBD',  
        borderColor: 'white',
        borderWidth: 5,
        alignSelf: 'flex-end',
    }
})