import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {FlatList, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../redux/navSlice';
import styles from "../style/styles";

const data = [
  {
    id: '321',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'SearchScreen',
  },
  {
    id: '322',
    title: 'Weather',
    image: 'https://links.papareact.com/28w',
    screen: 'Eat'
  },
];

const NavOptions = ({}) => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  
  return (
    // Clickable display
    <FlatList
      data={data}
      horizontal
      renderItem={({item}) => (
        <TouchableOpacity
          style={[tw`pt-4 pb-8 pl-6 pr-2 m-2 w-40`, styles.lightred]}
          onPress={() => navigation.navigate(item.screen)}
          
          // DISABLE IF USER HAVE'NT SELECTED ORIGIN
          // disabled={!origin}
          >
          <View style={{}}>
             {/* [!origin && styles.disable] */}
            
            <Image
              style={{height: 120, width: 120, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <View style={styles.rounded}>
              <Icon
                style={[tw`p-2`, styles.center]}
                name="arrow-right"
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
