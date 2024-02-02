import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxSiete = () => {
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
        flexDirection: 'column',  
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxPurple: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderColor: 'white',  
        borderWidth: 5,

    },
    boxOrange: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',   
        borderColor: 'white',
        borderWidth: 5,

    },
    boxCyan: {
        width: 100,
        height: 100,
        backgroundColor: '#80BCBD',  
        borderColor: 'white',
        borderWidth: 5,

    }
})