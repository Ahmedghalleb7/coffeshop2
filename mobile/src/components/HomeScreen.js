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
    
    <View style={{gap:10,flexDirection:"row",alignItems:"center"}}>
    <MaterialCommunityIcons name="map-marker" color={'#00512C'} size={25} />
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
        <View>
          <Card style={{ width:200 ,alignItems:'center'}}  >
          <Image  borderRadius={100}source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size={150} />
   <Text>Cappuccino </Text>
   <Text>With Sugar</Text>
   <View>
   <Text>50.000</Text>
   <MaterialCommunityIcons name="coffee" color={'white'} size={15}  style={{right:-10}}/>
   </View>
          </Card>
           </View>
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
  }
})


export default HomeScreen

