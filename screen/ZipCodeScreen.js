import React from "react";
 import { FlatList, TouchableHighlight } from "react-native";
 import { StatusBar, View, Text, StyleSheet , ImageBackground } from "react-native";
 import { useNavigation } from "@react-navigation/native";


 const availableZipItems = [
     { place: 'Hatyai', code: '90110' },
     { place: 'Trang', code: '92000' },
     { place: 'Chiangmai', code: '50000' },
     { place: 'Khonkaen', code: '40000' },
     { place: 'Chonburi', code: '20000' },
    ]

 const ZipItem = ({place, code, navigation}) => ( 
  
     <TouchableHighlight onPress={() => {
         navigation.navigate("Weather", {zipCode: code})
     }}>  
     
    
         <View style= {style.zipItem}>
          <Text style= {style.Place}>{place}</Text>
          <Text style= {style.Code}>{code}</Text>
         
         </View>
          
     </TouchableHighlight>

 )

 const _keyExtractor = item => item.code

 export default function ZipCodeScreen() {
     const navigation = useNavigation()
     return (
         <View>
             <FlatList
             data = {availableZipItems}
             key = {_keyExtractor}
             renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
         />
         <StatusBar styte="auto" />
         </View>  
     )
 }

 const style = StyleSheet.create(
     {
       zipItem: {
         flex: 2,
         flexDirection: 'row',
         justifyContent: 'space-evenly',
       },
       Place: {
        flex: 2,
        fontSize: 32,
        fontWeight: "bold",
        color: 'black',
        textAlign: 'right'
      },
      Code: {
        flex: 2,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: "bold",
        color: 'black',
      },
      

    }
  ) 

