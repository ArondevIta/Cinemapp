import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Footer from '../Footer'
import api from '../../services/api'

const Movies = () => {
  const[favorites, setFavorites] = useState([])

  async function loadFavorites(){
    const response = await api.get('movie')
    setFavorites(response.data)
  }

  async function handleStar(id){
    console.log(id)
    await api.delete(`/movie/${id}`)
    loadFavorites()
    console.log('deletado')
  }

  useEffect(() => {
    loadFavorites()
  }, [])

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
            Cinema APP - Favoritos
        </Text>
        <Text style={styles.subtitle}>
            Bem vindo ao mundo espetacular do cinema.
        </Text>
        <View style={styles.searchContainer}>
        </View>

        <ScrollView style={styles.scroll}>
        { favorites.map(favorite => (
          <View key={favorite._id} style={styles.list}>
            <Image 
              style={styles.imageMovie} 
              source={{ uri: favorite.poster }} 
            />
            <Text style={styles.titleMovie}>{favorite.title}</Text>
            <TouchableOpacity style={styles.star}>
              <FontAwesome onPress={() => handleStar(favorite._id)} size={25} color="#2F4F4F" name="star"/>
            </TouchableOpacity>
            <Text style={styles.year}>Ano: { favorite.year }</Text>
          </View>
        ))
        }
      </ScrollView>

      </View>
      
      <Footer />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,        
  },
  title: {
      marginTop: 50,
      fontSize: 25,
      fontWeight: 'bold',
      color: '#FFF'
  },
  subtitle: {
      marginTop: 10,
      color: '#FFF',
      marginLeft: 20
  },
  list:{
    flexDirection: 'column',
    marginTop: 10,
    padding: 5,
    backgroundColor: '#FFF',
    height: 60,
  }, 
  imageMovie: {
    width: 48,
    height: 48,
    borderRadius: 3,
  },
  titleMovie: {
    paddingHorizontal: 5,
    marginTop: 5,
    position: 'absolute',
    marginLeft: 70,
    fontSize: 12,
    color: '#5F9EA0',
    fontWeight: 'bold'
  },
  year: {
    paddingHorizontal: 5,
    paddingTop: 40,
    position: 'absolute', 
    marginLeft: 70,
    fontSize: 10
  },
  star: {
    marginTop: 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 20,
    borderRadius: 3,
  },
  scroll: {
    marginTop: 10,
  }   
})

export default Movies
