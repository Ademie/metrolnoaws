import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import React from 'react';
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "../style/styles";

const NavFavourites = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      title: "Home",
      destination: "Code Street, London, UK",
    },
    {
      id: "456",
      icon: "briefcase",
      title: "Work",
      destination: "London Eye, London, UK",
    },
    {
        id: "457",
        icon: "briefcase",
        title: "Work",
        destination: "London Eye, London, UK",
      },
  ];
  return (
    <ScrollView horizontal={true}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={()=>(
          <View style={[styles.lightred, {height:0.5}]}/>
      )}
      renderItem={({ item: { title, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-3`}>
          <View style={styles.round}>
          <Icon
            style={[tw`p-3`, styles.center, styles.bgred]}
            name={icon}
            color="white"
            size={18}
          />
          </View>
          <View>
            <Text style={tw`font-semibold text-lg`}>{title}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
    </ScrollView>
  );
};
// rounded-full mr-4
export default NavFavourites;

// const styles = StyleSheet.create({
//   center: {
//     position: 'relative',
//     textAlign: 'center',
//     fontSize: 20,
//     color:'#fff',
    
//   },
//   rounded: {
//     marginRight:7,
//     justifyContent: 'center',
//     backgroundColor: '#aaa',
//     height: 45,
//     width: 45,
//     borderRadius: 50,
//     overflow: 'hidden',
//   },
// });
