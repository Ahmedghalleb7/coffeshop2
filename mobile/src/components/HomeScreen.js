import { Box, Card, Center, Flex, Icon, Image, Input, ScrollView, VStack, Wrap } from 'native-base';
import React, { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {useDispatch,useSelector} from "react-redux"
import { fetchCategories, fetchOneCategoryProducts } from '../../store/categorieSlice';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
// import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'

function HomeScreen({ navigation }) {
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [categoryId,setCategoryId]=useState(1)
  const categories = useSelector(state=>state.categories.categories)
  const productsCategory = useSelector(state=>state.categories.productsCategory)
  console.log(productsCategory);
  const dispatch = useDispatch()
  
const handleSelectedCategories = (item) => {
setSelectedCategory(item.name)
setCategoryId(item.id)
}

  useEffect(()=>{
    dispatch(fetchCategories())
  },[])
  useEffect(()=>{
    dispatch(fetchOneCategoryProducts(categoryId))
  },[categoryId])
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
   

<FlatList
        data={categories}
        style={{padding:10}}
        showsHorizontalScrollIndicator = {false}
        horizontal
        renderItem={({item}) =>  <TouchableOpacity onPress={()=>{handleSelectedCategories(item)}} style={[styles.categories,selectedCategory === item.name && styles.selected]} >
        <MaterialCommunityIcons name="coffee" color={selectedCategory === item.name?"white":'#00512C'} size={15}  style={{right:-10}}/>
      <Text style={{color:selectedCategory === item.name ?"white":"#00512C"}}>{item?.name}</Text>
        </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
      
    
      </View>
        <View>
    <FlatList
    data = {productsCategory.product}
    showsHorizontalScrollIndicator = {false}
    horizontal
    renderItem={({item})=>    <TouchableOpacity>
    <View style={{ borderRadius:10 ,backgroundColor:'white' , width:200,height:252, alignItems:'center' ,marginRight:20}}>
       

      <Image  borderRadius={10}source={{ 
  uri: item.imageURL
}} alt="Alternate Text" size={165} width={180}  />
 <View style={{left:11 , flexDirection:'row', gap:10 }}>
  <View>
<Text style={[styles.bolded,{fontSize:16,fontWeight:'bold'}]} >{item.productName} </Text>
<Text>{item.shortDescription}</Text>

<Text style={[styles.bolded,{fontWeight:'bold'}]} >{item.price}</Text>
</View>
<TouchableOpacity style={{backgroundColor:'#00512C' , borderRadius:400 , width:40,height:40,display:"flex",justifyContent:"center" , top:30,left:-10}} >
<Text style={{color:'white' , textAlign:"center",fontSize:20}}>+</Text>
</TouchableOpacity>

</View>
     
       </View>
       </TouchableOpacity>}
     keyExtractor={item => item.id}
    />
         
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
           </View>
      </View>
    );
  }
  
const styles = StyleSheet.create({

selected : {
  backgroundColor : '#00512C'
} , 
  categories : {
    backgroundColor : '#fff', 
    padding : 5 , 
    display:"flex" ,
    flexDirection:"row",
    gap:15,
    alignItems:"center", 
    borderRadius : 100,
    width : 130,
    marginRight :10
  }
})


export default HomeScreen

