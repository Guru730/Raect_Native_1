import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'



const button =  props => {
    return (
        <TouchableOpacity onPress={props.onPress}>

          <View style={styles.button}>
            <Text style={styles.button_inner_wrapper}> {props.title} </Text>
          </View>
        </TouchableOpacity>
       
    )
}




const styles = StyleSheet.create({
    button: {
        width: '80vw',
        height: '50px',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        borderRadius: '5px'
    },


    button_inner_wrapper :{
        color: 'white',
        fontSize: '12px',
  

    }
       

})

export default button
