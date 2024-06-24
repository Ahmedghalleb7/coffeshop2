import React, { useState } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Card, Center, Flex, Icon, Image, Input, ScrollView, VStack, Wrap } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function DetailsScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const handleSelectedCategories = (category) => {
    setSelectedCategory(category)
  }
  return (
    <View>

      <View style={{ justifyContent: "space-between", alignItems: "center", borderRadius: 50 }}><Image style={{ width: 413, height: 350 }} source={{
        uri: "https://www.orzobimbo.it/wp-content/uploads/PWC_OrzoBimbo_Cappuccino-le-alternative-scaled.jpg"
      }} alt="Alternate Text" />
        <Text style={{ top: -130, left: -90, fontWeight: 'bold', fontSize: 40, color: 'white' }}>Cappuccino</Text>
        <Text style={{ top: -130, left: -120, fontWeight: 'bold', fontSize: 20, color: 'white' }}>with Sugar</Text>
      </View>
      <View style={{ backgroundColor: "white", height: 150, borderRadius: 50, top: -130 }}>
        <Text style={{ top: 40, left: 30, fontWeight: 'bold', fontSize: 20, color: 'black' }}>Cup Size</Text>
        <View style={{alignItems:"center"}}>
        <FlatList
          data={['Small', 'Large', 'Medium']}
          style={{ padding: 10, top: 40 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <TouchableOpacity onPress={() => { handleSelectedCategories(item) }} style={[styles.categories, selectedCategory === item && styles.selected]} >
            <MaterialCommunityIcons name="coffee" color={selectedCategory === item ? "white" : '#00512C'} size={15} style={{ right: -10 }} />
            <Text style={{ color: selectedCategory === item ? "white" : "#00512C" }}>{item}</Text>
          </TouchableOpacity>}
          keyExtractor={item => item}
        />
        </View>
      </View>
      <View style={{ backgroundColor: "white", height: 150, borderRadius: 50, top: -130 }}>
        <Text style={{ top: 40, left: 30, fontWeight: 'bold', fontSize: 20, color: 'black' }}>Level Sugar</Text>
        <View style={{alignItems:"center"}}>
        <FlatList
          data={['No Sugar', 'Low', 'Medium']}
          style={{ padding: 10, top: 40 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <TouchableOpacity onPress={() => { handleSelectedCategories(item) }} style={[styles.categories, selectedCategory === item && styles.selected]} >
            <MaterialCommunityIcons name="coffee" color={selectedCategory === item ? "white" : '#00512C'} size={15} style={{ right: -10 }} />
            <Text style={{ color: selectedCategory === item ? "white" : "#00512C" }}>{item}</Text>
          </TouchableOpacity>}
          keyExtractor={item => item}
        />
        </View>
      </View>
      <View style={{ backgroundColor: "white", height: 150, borderRadius: 50, top: -130 }}>
        <Text style={{ top: 40, left: 30, fontWeight: 'bold', fontSize: 20, color: 'black' }}>About</Text>
        <View style={{alignItems:"center"}}>
        <Text>{}</Text>
        </View>
      </View>
      
    </View>

  );
}
const styles = StyleSheet.create({

  selected: {
    backgroundColor: '#00512C'
  },
  categories: {
    backgroundColor: '#fff',
    padding: 5,
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    borderRadius: 100,
    width: 100,
    marginRight: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "#00512C"
  }
})

export default DetailsScreen
