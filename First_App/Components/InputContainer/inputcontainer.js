import React from 'react'
import {View, Text, TextInput, Button, StyleSheet, Modal} from 'react-native'



const inputcontainer = (props) => {

  
    return (
 
     <View>
         <Modal visible={false}>
      <TextInput onChangeText={props.nameHandler} ref={props.NameInput} placeholder='Name' style={styles.Text_Input}/>
      <TextInput onChangeText={props.agehandler} ref={props.ageInput} placeholder='Age' style={styles.Text_Input}/>
       <Button title='Add Goal' onPress={props.addItem}/>
       </Modal>
    </View>
     
    )
}


const styles = StyleSheet.create({
    Text_Input: {
        width: '70vw',
        height: '50px',
        border: '1px solid gray',
        borderRadius: '5px'
    }
})


export default inputcontainer


