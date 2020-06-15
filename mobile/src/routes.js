import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import Home from './pages/Home'
import Movies from './pages/Movies'

const AppStack = createStackNavigator()

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle:{
            backgroundColor: "#2F4F4F"
          }
        }}
      >
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen  name="Movies" component={Movies}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
