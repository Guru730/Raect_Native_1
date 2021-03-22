import React, { Component } from 'react'
import {
    View, 
    Animated,
     PanResponder, 
     Dimensions, 
     StyleSheet,
     UIManager,
     LayoutAnimation
    } from 'react-native'




const SCREEN_WIDTH = Dimensions.get('window').width;
const THRESHOLD = SCREEN_WIDTH * 0.5;


//importing Data object from compomets/new/extras

export class decks extends Component {

static defaultProps = {
    SwipeLeft: () => {},
    SwipeRight: () => {}
}

    constructor(props) {
     super(props)

     const position = new Animated.ValueXY();
     const panResponder = PanResponder.create({
         onStartShouldSetPanResponder: () => true,
         onPanResponderMove: (event, gesture) => {
           position.setValue({x: gesture.dx, y: gesture.dy})
         },
         onPanResponderRelease: (event, gesture) => {
           
            if(gesture.dx > THRESHOLD ) {
                this.forceSwipe('right');
            }
            else if (gesture.dx < -THRESHOLD ) {
                     this.forceSwipe('left')
            }
                 else {
                     this.resetPosition();
                 }


         }
     });


     this.state = { panResponder, position, index : 0};

    }



    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }






    componentWillReceiveProps(nextProps) {
          
        if(nextProps.data !== this.props.data) {
            this.setState({index: 0});
        }
         
    }



     forceSwipe = (direction) => {
        


        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

        Animated.timing(this.state.position, {
            toValue: {x: x * 2, y: 0}
        }).start(() => this.onSwipeComplete(direction));
      
    }



    resetPosition = () => {
        Animated.spring(this.state.position, {
            toValue: {x: 0, y: 0}
        }).start();
    }
      




    onSwipeComplete = (direction) => {
        const {SwipeLeft, SwipeRight, data} = this.props;   
      this.state.position.setValue({x: 0, y: 0});

      const item = data[this.state.index]; 
        direction === 'right' ? SwipeRight(item) : SwipeLeft(item);


      this.setState({index: this.state.index + 1});
            
    }




      getCardsStyle = () => {

        const {position} = this.state;

        const rotate = position.x.interpolate({
            inputRange: ['-500', '0' , '500'],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...this.state.position.getLayout(),
            transform: [{rotate}],
        }

      }














    renderCards = () => {
 

        if(this.state.index == this.props.data.length) {
            return this.props.NoMoreCard;
        }

     return   this.props.data.map((item, index) => {
                  
        if (index === this.state.index) {
          return (  <Animated.View 
            style={[this.getCardsStyle()]}
            {...this.state.panResponder.panHandlers}
            >
              {this.props.renderCards(item)};
            </Animated.View> )
        }
           else if(index > this.state.index) {

               return (
                    <Animated.View
                     key={item.id}
                      style={[styles.Card, {top: 10 * (index - this.state.index), left: 2 * (index - this.state.index)} ]}>
                   {this.props.renderCards(item)}
                   </Animated.View>
             
               )
           }

           else if(index <  this.state.index) {
               return null;
           }

 
        }).reverse();


     
    }




     





    render() {
        return (
          <View>
         {this.renderCards()}
         </View>
        )
    }
}


const styles = StyleSheet.create({
    Card: {
        position: 'absolute',

    }
})






export default decks
