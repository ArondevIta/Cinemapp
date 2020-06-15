import React, { useState } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import api from '../../services/api'
import Footer from '../Footer' 

const Home = () => {
  const[title, setTitle] = useState('')
  const[imdb, setImdb] = useState('')
  const[movies, setMovies] = useState([])
  const[favorites, setFavorites] = useState([])

  async function handleSearch(){
    const response = await api.get(`/search?title=${title}`)
    setMovies(response.data)
  }
  async function handleStar() {
    const data = {
      imdb
    }
    await api.post('/movie', data)

  }

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
            Cinema APP
        </Text>
        <Text style={styles.subtitle}>
            Bem vindo ao mundo espetacular do cinema.
        </Text>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.inputSearch}
            value={title}
            onChangeText={setTitle}
          />
          <TouchableOpacity onPress={(handleSearch)}> 
            <FontAwesome 
              name="search" 
              size={30} 
              color="#FFF"  
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <ScrollView style={styles.scroll}>
            {
              movies.Search ? (
                movies.Search.map(movie =>  (
                  
                  <View key={movie.imdbID} style={styles.list}>
                    <Image 
                      style={styles.imageMovie} 
                      source={{ uri: movie.Poster }} 
                    />
                    <Text style={styles.titleMovie}>{movie.Title}</Text>
                    <TouchableOpacity style={styles.star}>
                      <FontAwesome onPress={() => handleStar(setImdb(movie.imdbID))} size={25} color="#ccc" name="star"/>
                    </TouchableOpacity>
                    <Text style={styles.year}>Ano: { movie.Year }</Text>
                  </View>
                ))
              ) : <View />

            }    
        </ScrollView>
      </KeyboardAvoidingView>
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
    inputSearch: {
        backgroundColor:'#5F9EA0',
        paddingLeft: 10,
        marginTop: 30,
        borderStyle: 'solid',
        borderRadius: 3,
        borderLeftColor: '#FFF',
        color: '#FFF',
        height: 40,
        width: 260,
        
    },
    searchContainer:{
      flexDirection: 'row'
    },
    searchIcon: {
      marginTop: 30,
      marginLeft: 15
    },
    scroll:{
      marginTop: -40
      
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
      position: 'absolute', 
      marginLeft: 70,
      marginTop: 25,
      fontSize: 10
    },
    star: {
      marginTop: 20,
      position: 'absolute',
      alignSelf: 'flex-end',
      paddingRight: 20,
      borderRadius: 3,
    },   
})

export default Home
