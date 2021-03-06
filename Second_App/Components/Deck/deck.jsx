import React, {Component} from 'react'
import { Animated } from 'react-native'
import {View, PanResponder, Dimensions} from 'react-native'




const SCREEN_WIDTH = Dimensions.get('window').width;




const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;

export class deck extends Component {



    static defaultProps = {
        onSwipeRight: () => {

        },

        onSwipeLeft: () => {

        }
    }

    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();

        const panResponder =  PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {

                position.setValue({x: gesture.dx, y: gesture.dy});
                console.log(this.props.data);


            },



            
            onPanResponderRelease: (event, gesture) => {
                             
                if(gesture.dx > SWIPE_THRESHOLD) {   
                        this.forceSwipe('right');
                } else if(gesture.dx < -SWIPE_THRESHOLD) {
                    this.forceSwipe('left');
                }else {
                    this.resetPosition();

            

                }
            }
            
        });




        this.state = { panResponder, position, index: 0};

    }








    onSwipeComplete = (direction) => {
        
        const {onSwipeRight, onSwipeLeft, data} = this.props;
        const item = data[this.state.index];


      this.state.position.setValue({x: 0, y: 0})


        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
         this.setState({index: this.state.index + 1});
    }



    forceSwipe = (direction)  => {

        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    
         Animated.timing( this.state.position, {
             toValue: {x: x * 2, y: 0 },
             duration: 250,
         }).start(() => this.onSwipeComplete(direction));

        
    }

  







    resetPosition = () => {
       Animated.spring(this.state.position, {
           toValue: {x: 0, y: 0}
       }).start();
        
    }



















    getCardStyle() {

        const {position} = this.state;

       const rotate = position.x.interpolate({
           inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
           outputRange: ['-120deg', '0deg','120deg']
       });

        return {
            ...this.state.position.getLayout(),
            transform: [{rotate}],
            zIndex: 100,
        }
    }





















    renderCards() {
       return this.props.data.map((item, index) => {
   
        if(index === this.state.index) {
            return (
                <Animated.View
                key={item.id}
                {...this.state.panResponder.panHandlers}
                style={this.getCardStyle()}
                >
                {this.props.renderCard(item)}
                </Animated.View>
            )
        }

             else {
      return (
          <View>
                  {this.props.renderCard(item)}
          </View>
      )
          
            }
       })
    } 




















    render() {
        return (
           <View style={{width: '98vw', overflow: 'hidden'}}>
               {this.renderCards()}
           </View>
        )
    }




}

export default deck











































































// import React, { Component } from 'react'
// import { Animated } from 'react-native';

// import {View, Text,  PanResponder} from 'react-native';


// export class deck extends Component {

//     constructor(props) {
//         super(props);

//         const position = new Animated.ValueXY();
//         const panResponder = PanResponder.create({
//             onStartShouldSetPanResponder: () => true,
//             onPanResponderMove: (event, gesture) => {
//                 position.setValue({x: gesture.dx, y: gesture.dy})
//             },
//             onPanResponderRelease: () => {}
//         });

//         this.state = { panResponder, position};
//     }

//     renderCards() {
//         return this.props.data.map((item, index) => {


//             if(index === 0) {
//                return(<Animated.View
//                  style={this.state.position.getLayout()}
//                  {...this.state.panResponder.panHandlers}
//                 >
//                   {this.props.renderCard(item)}
//                 </Animated.View>)
//             }

//             return this.props.renderCard(item);
//         })
//     }

//     render() {
//         return (
//              <View
//              >
//                  {this.renderCards()}
//              </View>
//         )
//     }
// }

// export default deck
