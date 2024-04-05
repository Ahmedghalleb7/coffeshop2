import { Box, Card, Center, Flex, Icon, Image, Input, ScrollView, VStack, Wrap } from 'native-base';
import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
// import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1 ,padding:10,gap:15}}>
        
        <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}><Image size={50} borderRadius={100} source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" />
    
    <View style={{gap:5,flexDirection:"row",alignItems:"center"}}>
    <MaterialCommunityIcons name="map-marker" color={'#00512C'} size={15} />
    <Text>Tunis, Tunisia</Text>
    </View>

    <MaterialCommunityIcons name="bell" color={'#00512C'} size={25} />
    </View>

      <Text style={{fontWeight:"bold"}}>Aslema Si Flen</Text>
      <VStack width="100%" space={5}>
      
        <Input placeholder="Search Coffe..." variant="filled" width="100%" bg="gray.200" borderRadius={100} py={1} px={4} _web={{
        _focus: {
          borderColor: 'muted.300',
          style: {
            boxShadow: 'none'
          }
        }
      }} InputLeftElement={<MaterialCommunityIcons name="magnify" color={'#00512C'} size={15}  style={{right:-10}}/>} />
      </VStack>
      
      <Text style={{fontWeight:"bold"}}>Categories</Text>

      <View style={{flexDirection:"row", gap:100}}>
        <ScrollView horizontal  style={{gap:50}} >
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
      <Text style={{color:"white"}}>Cappuccino</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView>
      <TouchableOpacity>
        <View style={{ borderRadius:10 ,backgroundColor:'white' , width:200,height:252, alignItems:'center' }}>
           
  
          <Image  borderRadius={10}source={{ 
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size={165} width={180}  />
     <View style={{left:-10 , flexDirection:'row', gap:10 }}>
      <View>
   <Text style={[styles.bolded,{fontSize:20}]} >Cappuccino </Text>
   <Text>With Sugar</Text>

   <Text style={styles.bolded} >50.000 DT</Text>
   </View>
  <TouchableOpacity style={{backgroundColor:'#00512C' , borderRadius:400 , width:40,height:40,display:"flex",justifyContent:"center" , top:30}} >
    <Text style={{color:'white' , textAlign:"center",fontSize:20}}>+</Text>
  </TouchableOpacity>

   </View>
         
           </View>
           </TouchableOpacity>
         
           <Text style={{fontWeight:"bold", top:10}}> Special Offer</Text>
           
           <TouchableOpacity>
            
        <View style={{ borderRadius:10 ,backgroundColor:'white' , width:200,height:252, alignItems:'center',top:20 }}>
           
  
          <Image  borderRadius={10}source={{ 
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size={165} width={180}  />
    
     <View style={{left:-30 , flexDirection:'row', gap:10 }}>
      <View>
        
   <Text style={[styles.bolded,{fontSize:20}]} >Coffee </Text>
      
  
   

  
   <Text>With Sugar</Text>

   <Text style={styles.bolded} >50.000 DT</Text>
   </View>
  <TouchableOpacity style={{backgroundColor:'#00512C' , borderRadius:400 , width:40,height:40,display:"flex",justifyContent:"center" , top:30, left:50}} >
    <Text style={{color:'white' , textAlign:"center",fontSize:20}}>+</Text>
  </TouchableOpacity>

   </View>
  <MaterialCommunityIcons name="cards-heart-outline" color={"red"} size={25}style={{top:-70 ,left:70}}  />
         
           </View>
        
           </TouchableOpacity>
           </ScrollView>
        
      </View>
    );
  }
  
const styles = StyleSheet.create({
  categories : {
    backgroundColor : '#00512C', 
    padding : 5 , 
    display:"flex" ,
    flexDirection:"row",
    gap:15,
    alignItems:"center", 
    borderRadius : 100,
    width : 120,
    marginRight :10
  },
  bolded : {
    fontWeight:"bold"
  }
})


export default HomeScreen

