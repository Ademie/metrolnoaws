import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import tw from 'twrnc'
import styles from '../style/styles'

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={[tw`p-5`,styles.bgred]}>
        {/* user row */}
        <View style={tw`flex-row items-center`}>
            <View style={tw`w-18 h-18 rounded-full bg-gray-100 mr-4`}/>
                <View>
                    <Text style={tw`text-white text-lg  font-bold`}>Ademie Dave</Text>
                    <Text style={tw`text-gray-400 text-lg`}>5.00</Text>
                </View>
            
        </View>
        {/* messages row */}
        <View style={tw`border-t-2 border-b-2 border-gray-200 my-5 py-2`}>
        <Pressable onPress={()=>{}}>
            <Text style={tw`text-white py-2`}>Messages</Text>
        </Pressable>
        </View>
        {/* do more */}
        <Pressable onPress={()=>{}}>
            <Text style={tw`text-gray-300 py-2`}>Do more with your account</Text>
        </Pressable>
        {/* make money */}
        <Pressable onPress={()=>{}}>
            <Text style={tw`text-white py-2`}>Drive & Earn</Text>
        </Pressable>
      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
} 

export default CustomDrawer

