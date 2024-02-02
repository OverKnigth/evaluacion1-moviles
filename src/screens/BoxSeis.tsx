import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxSeis = () => {
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
        width: '100%',
        height: '25%',
        backgroundColor: 'purple',
        borderColor: 'white',  
        borderWidth: 5,
        alignSelf: 'flex-start',
    },
    boxOrange: {
        width: '100%',
        height: '25%',
        backgroundColor: 'orange',   
        borderColor: 'white',
        borderWidth: 5,
        alignSelf: 'flex-start',
    },
    boxCyan: {
        width: '100%',
        height: '50%',
        backgroundColor: '#80BCBD',  
        borderColor: 'white',
        borderWidth: 5,
        alignSelf: 'flex-start',
    }
})