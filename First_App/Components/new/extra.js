import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity} from 'react-native'


import CustomButton from './Components/button/button'


function App() {


  const [list, setlist] = useState([]);
  const [name, setname] = useState();
  const [age, setage] = useState();




  const nameHandler = (enteredText) => {
    setname(enteredText);
  }

  const ageHandler = (enteredAge) => {
    setage(enteredAge);
  }



  const removeItem = (goalId) => {
    setlist(currentGoals => {
      return currentGoals.filter((goal) => goal.id  !== goalId)
    })
  }



  const nameInput = React.useRef();

  const ageInput = React.useRef();


  const addHandler = () => {
    
    if(nameInput.current.value.length > 0  && ageInput.current.value.length > 0) {
    setlist(current => [...current, {id: Math.ceil(Math.floor() * 1000), Name: name, Age: age}]);
   
    }

    else{
     return null
    }
  }



  return (
    <View style={styles.Main_column}>

      <TextInput keyboardType='default' ref={nameInput} style={styles.Text_Input} onChangeText={nameHandler} placeholder='Goals'/>


      <TextInput   keyboardType='numeric' ref={ageInput} style={styles.Text_Input} onChangeText={ageHandler} placeholder='Time'/>
         
         <CustomButton  onPress={addHandler} title='Add goal'  />


         <FlatList data={list} renderItem={itemData => (

           <TouchableOpacity onPress={() => removeItem(itemData.item.id)}>
           <View  style={styles.item}>  
             <Text style={styles.item_FirstPart}>
               {itemData.item.Name}
             </Text>
             <Text style={styles.item_Second}>
               {itemData.item.Age}
             </Text>
              </View>
              </TouchableOpacity>
         )}/>

    </View>
   
  )
}



const styles = StyleSheet.create({

  Main_column: {
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: '40px'
  },

Text_Input: {
  width: '80vw',
  height: '50px',
  border: '1px solid gray',
  margin: '10px',
  padding: '10px',
  borderRadius: '5px',
},

item: {
  width: '200px',
  height: '50px',
  backgroundColor: 'orange',
  flexDirection: 'row',
  borderRadius: '5px'
},
item_FirstPart: {
  color: 'white',
  fontSize: '12px',
  fontWeight: '800',
  flex: 2,
  alignItems: 'center',
  justifyContent: 'center'
},

item_Second: {
  color: 'white',
  fontSize: '12px',
  fontWeight: '800',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px'
}




})

export default App
