import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextImput} from 'react-native-gesture-handler';
import {Header} from 'react-native-eliments';

export default class WriteStoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            storyText:'',
        }
    }
    render(){
        return(
            <View style={styles.container}>
             <Header
             backGroundColor={"pink"}
             centerComponent={{

                text:'Story Hub',
                style:{color:'grey'}
             }}
             />
             <TextImput placeHolder="StoryTitle"
                 onChangeText={(text)=>{
                     this.setState({
                         title:text
                     })
                 }}
                 value={this.state.title}
                 style={styles.title}
                 placeHolderTextColor='black'/>
              <TextImput placeHolder="Author"
              onChangeText={(text)=>{
                  this.setState({
                      author:text
                  })

              }}
              placeHoldeTextColor="black"
              value={this.state.author}
              style={styles.author}
              />
            <TextImput placeHolder="WriteYourStory"
            onChangeText={(text)=>{
                this.setState({
                    storyText:text
                })
            }}
            placeHoldeTextColor="black"
              value={this.state.storyText}
              style={styles.storyText}
              multiLine={true}
            />
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

 render(){
     return(
         <View style={styles.container}>
         <Text>Write Story Screen </Text>
         </View>
     );
 }

}
