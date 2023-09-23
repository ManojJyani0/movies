import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title:string;
}

const Header = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:40,
        backgroundColor:'#414141',

      },
      text:{
        fontSize:25,
        fontWeight:"bold"
      }
})