import React, { Component } from "react";
//ta1
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    

//ta3 line22dorid
//ta5,6 upto line40
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg_image.png')}style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker App
                        </Text>
                    </View>
                  
                  <TouchableOpacity style={styles.routeCard} onPress={() =>this.props.navigation.navigate("IssLocation")}>
                        <Text style={styles.routeText}>ISS Location</Text>
                        <Text style={styles.knowMore}>"know More ----->"}</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require("../assets/iss_icon.png")} style={styles.
iconImage}></Image>
      
                        </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.routeCard} onPress={() =>this.props.navigation.navigate("Meteors")}>
                        <Text style={styles.routeText}>Meteors</Text>
                        <Text style={styles.knowMore}>"know More ----->"}</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require("../assets/meteor_icon.png")} style={styles.
iconImage}></Image>
      
                        </TouchableOpacity>

                     <TouchableOpacity style={styles.routeCard} onPress={() =>this.props.navigation.navigate("Updates")}>
                        <Text style={styles.routeText}>Updates</Text>
                        <Text style={styles.knowMore}>"know More ----->"}</Text>
                        <Text style={styles.bgDigit}>3</Text>
                        <Image source={require("../assets/rocket_icon.png")} style={styles.
iconImage}></Image>
      
                        </TouchableOpacity>
              </ImageBackground>  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    //ta2
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    backgroundImage:{
      flex:1,
      resizeMode:'cover',
    },
   
    //ta7
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    //ta4
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    knowMore:{
      paddingLeft:30,
      color:"red",
      fontSize:15
    },
    bgDigit:{
      position:"absolute",
      color:"rgba(183,183,183,0.5)",
      fontSize:150,
      right:20,
      bottom:-15,
      zIndex:-1,
    },
    iconImage: {
      position:"absolute",
      height:200,
      width:200,
      resizeMode:"contain",
      right:20,
      top:-80,
    }
});