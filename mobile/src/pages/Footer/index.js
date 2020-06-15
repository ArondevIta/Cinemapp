import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Footer = () => {
  const navigation = useNavigation()

  function navigateToFavorites(){
    navigation.navigate('Movies')
  }
  function navigateToHome(){
    navigation.navigate('Home')
  }

  return(
    <>
      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateToHome}>
          <View style={styles.footerSearch}>
            <FontAwesome style={styles.faSearch} name="search" size={20} color="#FFF" />
            <Text style={styles.searchText}>
              Buscar
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={navigateToFavorites}>
          <View style={styles.footerStar}>
            <FontAwesome style={styles.faStar} name="star" size={20} color="#FFF" />
            <Text style={styles.starText}>
              Favoritos
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
  
}

const styles = StyleSheet.create({
  footer:{
    backgroundColor: '#5F9EA0',
    height: 50,
    borderRadius: 2,
    flexDirection: 'row',
  },
  footerSearch: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10
  },
  searchText: {
    marginLeft: 5,
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold'
  },
  faSearch: {
    marginLeft: 20,
    marginTop: 5
  },
  footerStar: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 20,
  },
  faStar: {
    marginLeft: 30,
    marginTop: 5
  },
  starText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5
  }
})

export default Footer 
