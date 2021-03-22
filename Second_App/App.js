import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import {View, Text, Image, StyleSheet} from 'react-native'






import Deck from './Components/Deck/decks'




import  {DATA} from './Components/new/extras'



export class App extends Component {


  renderCard = item =>  {

    return (

      <View style={Cardstyles.Card} >
         <View>
           <Text style={Cardstyles.Card_Title}>{item.text}</Text>
         </View>
         <View>
           <Image style={Cardstyles.Card_Image} source={{uri: item.uri}}/>
         </View>
         <TouchableOpacity>
           <View style={Cardstyles.Card_Button}>
            <Text style={Cardstyles.Button}>Button:{item.id}</Text>
           </View>
         </TouchableOpacity>
      </View>

    )

  }




   
  NoMoreCard = () => {
      return(
        <View style={Cardstyles.Card} >
        <View>
          <Text style={Cardstyles.Card_Title}>No More Cards Left</Text>
        </View>
        <TouchableOpacity>
          <View style={Cardstyles.Card_Button}>
           <Text style={Cardstyles.Button}>Get More</Text>
          </View>
        </TouchableOpacity>
     </View>
      )
  }





  render() {
    return (
      <View style={Cardstyles.Card_Container}>
        <Deck data={DATA} renderCards={this.renderCard} NoMoreCard={this.NoMoreCard()}/>
       </View>
    )
  }
}





const Cardstyles = StyleSheet.create({
  Card_Container: {
    alignItems: 'center',
    width: '100vw',
    overflow: 'hidden'


  } ,

  Card: {
    width: '80vw',
    height: '50vh',
    border: '1px solid white',
    backgroundColor: 'gray',
    margin: '20px',
    borderRadius: '10px',
    alignItems: 'center',
  
     
  },
  Card_Image: {
    width: '60vw',
    height: '30vh',
    borderRadius: '10px'
  }, 

  Card_Title: {
    fontSize: '16px',
    fontWeight: '800',
    margin: '10px',
    color: 'white'
  },
  Card_Button: {
    width: '60vw',
    height: '6vh',
    backgroundColor: 'white',
    margin: '20px',
    borderRadius: '10px',
    alignItems: 'center',
    justifyContent: 'center'
  },


  Button: {
    fontSize: '16px',
    fontWeight: '800'
  }
 
})

export default App
