import React from 'react';
import {StyleSheet, View, SafeAreaView, Image, Alert} from 'react-native';
import tw from 'twrnc';
import {useDispatch} from 'react-redux';
import {GOOGLE_MAPS_KEY} from '@env';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {setOrigin, setDestination, selectDestination} from '../redux/navSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Places from '../components/Places';
import styles from '../style/styles';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../redux/navSlice';


navigator.geolocation = require('@react-native-community/geolocation');

const SearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  

  return (
    <SafeAreaView>
      {/* LOCATION */}
      <GooglePlacesAutocomplete
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
        renderRow={(GooglePlaceData) => <Places data={GooglePlaceData}/>}
        renderDescription={(DescriptionRow) => DescriptionRow.description || DescriptionRow.vicinity}
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
        enableHighAccuracyLocation={true}
        currentLocation={true}
        currentLocationLabel='Current location'
        predefinedPlaces={[homePlace, workPlace]}
        styles={{
        textInput: {
            fontSize: 16,
            marginLeft:10,
            marginBottom:55,
          },
          container: {
            position: 'absolute',
            top:50,
            left:10,
            right:0,
            width:'90%',
          }
        }}
      />

      {/* DESTINATION */}
      <GooglePlacesAutocomplete
        // disabled={!origin}
        
        placeholder="Destination"
        nearbyPlacesAPI="GooglePlaceSearch"
        debounce={100}
        fetchDetails={true}
        returnKeyType={'search'}
        minLength={2}
        enablePoweredByContainer={false}
        predefinedPlaces={[homePlace, workPlace]}
        styles={{
          textInput: {
            fontSize: 16,
            marginLeft:10,
            marginBottom:5,
          },
          container: {
            position: 'absolute',
            top:100,
            left:10,
            right:0,
            width:'90%',
          }
        }}
        query={{
          key: GOOGLE_MAPS_KEY,
          language: 'en',
          region: 'ng',
        }}
        renderRow={(GooglePlaceData) => <Places data={GooglePlaceData}/>}
        
        onPress={(data, details = null) => {
          dispatch(
            setDestination({
              location: details.geometry.location,
              description: data.description,
            }),
          );
          if(origin && destination){
            navigation.navigate('MapScreen');
          }else{
            Alert.alert('Enter Your Location')
          }
        }}
      />

      {/* DOT NEAR ORIGIN INPUT*/}
      <View style={[tw`w-1 h-1 absolute top-18 rounded-full left-2`,styles.bgred]}/>
      {/* CONNECTING LINE */}
      <View style={[tw`w-0.5 h-12 absolute top-19 left-2.2`,styles.lightred]}/>
      {/* SQAURE NEAR DESTINATION INPUT*/}
      <View style={[tw`w-1 h-1 absolute top-30 left-2`,styles.bgred]}/>
    </SafeAreaView>
  );
};

export default SearchScreen;


