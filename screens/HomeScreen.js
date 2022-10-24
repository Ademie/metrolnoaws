import React from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import tw from 'twrnc';
import {useDispatch} from 'react-redux';
import NavFavourites from '../components/NavFavourites';
import NavOptions from '../components/NavOptions';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/styles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  return (
    <View style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <View style={[tw`px-1 flex-row`, styles.top]}>
          <View style={[tw`rounded-full px-2 py-1`, styles.bgred]}>
            <Icon 
            name="bars" style={[tw`text-sm text-white`, styles.bar]} />
         
         {/* onPress={navigation.openDrawer()} */}
          </View>
          <Image
            source={require('/Users/Ademie/Desktop/Ademie/metrol/assets/images/metro.png')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* <GooglePlacesAutocomplete
          debounce={100}
          placeholder="Your location"
          nearbyPlacesAPI="GooglePlacesSearch"
          minLength={2}
          enablePoweredByContainer={false}
          returnKeyType={'search'}
          query={{
            key: GOOGLE_MAPS_KEY,
            language: 'en',
            components: 'country:ng',
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              }),
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
      
           />

         */}
        <NavOptions />
        <NavFavourites />
      </View>
    </View>
  );
};

export default HomeScreen;
