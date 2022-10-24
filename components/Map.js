import {Image, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'twrnc';
import {useSelector, useDispatch} from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from '@env';
import cars from '../assets/data/cars';
import {selectDestination,selectOrigin,setTravelTime} from '../redux/navSlice';


const Map = (props) => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const isSatellite = true;

  const getImage = (type) => {
    if(type === 'MetrolX'){
      return require('/Users/Ademie/Desktop/Ademie/metrol/assets/images/white.png')
    }
    if(type === 'MetrolXL'){
      return require('/Users/Ademie/Desktop/Ademie/metrol/assets/images/blue.png')
    }
    if(type === 'MetrolLUX'){
      return require('/Users/Ademie/Desktop/Ademie/metrol/assets/images/suv.png')
    }
     return require('/Users/Ademie/Desktop/Ademie/metrol/assets/images/red.png')
    }  


  // ZOOM AND FIT TO MARKERS
  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top: 50, bottom: 50, right: 50, left: 50},
    });
  }, [origin, destination]);

  // CALCULATE TRAVEL TIME
  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`,
      )
        .then(res => res.json())
        .then(data => {
          dispatch(setTravelTime(data.rows[0].elements[0]));
          console.log(data.rows[0].elements[0]);
        });
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_KEY]);

  return (
    <MapView
    showsUserLocation={true}
      ref={mapRef}
      style={tw`flex-1`}
      mapType={isSatellite ? 'standard' : 'satellite'}
      region={{
        // if user sets an origin, return the location else return the location of Akure by default.
        latitude: origin ? origin.location.lat : 7.257132500000001,
        longitude: origin ? origin.location.lng : 5.205790899999999,
        latitudeDelta: 0.000005,
        longitudeDelta: 0.000005,
      }}>
      {/* SHOW DIRECTIONS */}
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {/* {cars.map((car) => {
         <Marker
         key={car.id}
         coordinate={{latitude: origin.location.lat, longitude: origin.location.lng,}}
         >
         <Image
           style={{width: 80, height: 80, 
            resizeMode: 'contain',
            transform:[{
              rotate: `${car.heading}deg`
            }]
          }}
           source={getImage(car.type)}
         />
         </Marker>
      })} */}
      {/* RENDER CAR ON MAP */}
      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Location"
        description={origin.description}>
        <Image
          style={{width: 80, height: 80, 
            transform:[{
              rotate: '90deg'
            }],
            resizeMode: 'contain'}}
          source={{
            uri: '/Users/Ademie/Desktop/Ademie/metrol/assets/images/white.png',
          }}
        />
      </Marker>
      {/* RENDER A MARKER IF ORIGIN IS SELECTED */}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Location"
          description={origin.description}
          identifier="origin"
        />
      )}

      {/* RENDER A MARKER IF DESTINATION IS SELECTED */}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Location"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
}
export default Map;


