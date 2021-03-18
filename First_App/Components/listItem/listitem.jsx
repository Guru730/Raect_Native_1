import React from 'react'
import {View, Text, StyleSheet, } from 'react-native'



function listitem(props) {

    const colorArray = ['red', 'blue', 'yellow', 'green', 'orange', 'pink', 'black']

       const number = Math.floor(Math.random() * 10)

    return (
        <View key={props.id} style={{width: '200px', height: '50px', backgroundColor: `${colorArray[number]}`, margin: '10px'}}>
          
         
    
        <Text>{props.content}</Text>
  

      </View>
        
    )
}

export default React.memo(listitem)
