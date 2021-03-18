import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Button, FlatList} from 'react-native'
import Item from './Components/listItem/listitem'


import InputContainer from './Components/InputContainer/inputcontainer'


function App() {



  const [isModal, setisModal] = React.useState(false);
  const [name, setname] = React.useState();
  const [Age, setAge] = React.useState();
  const [list, setlist] = React.useState([]);


  const NameInput = React.useRef();

  const ageInput = React.useRef();


  const removeItem = goalId => {
    setlist((current) => current.filter((goal) => goal.id !== goalId));
  };




  const nameHandler = enteredName => {
    setname(enteredName);
  }


  const agehandler = enteredage => {
    setAge(enteredage);
  }




      
  const addItem = () => {
    if(NameInput.current.value.length > 0 && ageInput.current.value.length > 0) {
    setlist(current => [...current, {id: Math.floor(Math.random() * 10000), Name: name, Age: Age}]);
    NameInput.current.value = '';
    ageInput.current.value = '';
    } else {
      return null
    }
  }

  return (
  <View style={styles.Main_screen}>

     <InputContainer addItem={addItem} nameHandler={nameHandler} agehandler={agehandler} />
     
     <View>
       <FlatList data={list} renderItem={data => (
         <TouchableOpacity onPress={() => removeItem(data.item.id)}>
          <Item key={data.item.id} content={data.item.name}/>
         </TouchableOpacity>
       )}/>
     </View>
   
  </View>
  )
}




const styles = StyleSheet.create({
   Main_screen: {
     padding: '10px',

   },
   Input_field_container: {
    
      
   },
   Text_Input: {
      border: '1px solid gray',
      borderRadius: '5px',
      padding: '10px',
      width: '70vw',
      height: '50px',
      margin: '10px'
   }

})

export default App
