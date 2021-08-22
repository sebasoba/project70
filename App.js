import React from 'react';
import { StyleSheet, Text, View, Image } from 'react=native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
export default class App extends React.Component{
   render(){
       return(
           <AppContainer/>
       );
   }
}
const TabNavigator = createBottomTabNavigator({
    WriteStory:WriteStoryScreen,
    ReadStory:ReadStoryScreen
},
{
    DefaultNavigationOptions:({navigation})=>({
        tabBarIcon: ()=>{
            const routeName=navigation.state.routeName;
            console.log(routeName)
            if(routeName==="WriteStory"){
                return(
                    <Image
                    source={require("./assets/write.png")}
                    />

                   
                )

            }
            else if(routeName==="ReadStory"){
                return(
                    <Image
                    source={require("./assets/read.png")}
                    />
                )
            }

        }
    })
}
)
const AppContainer = createAppContainer(
    TabNavigator
);