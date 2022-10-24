import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectTravelTime} from '../redux/navSlice';
import styles from '../style/styles';
// import 'intl';
// import 'intl/locale-data/jsonp/en-NG'; // or any other locale you need

{
  /* Select A Ride */
}
const data = [
  {
    id: 'Metrol-X',
    title: 'Metrol X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Metro-XL',
    title: 'Metrol XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'MetroL-XM-250',
    title: 'Metrol LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];
//45 naira charge per minute
const price = 45;
const PRICE_SURGE = 1.75;





const RideCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTime = useSelector(selectTravelTime);
  return (
    <SafeAreaView style={[tw`bg-white flex-grow `, styles.space]}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
          onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select A Ride - {travelTime?.distance.text}
        </Text>
      </View>

{/* AVAILABLE RIDES */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item: {id, title, multiplier, image}, item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[id === selected?.id && styles.lightred,
              tw`flex-row items-center justify-between px-2`, 
            ]}>
            <Image
              style={{height: 90, width: 100, resizeMode: 'contain'}}
              source={{uri: image}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-lg font-semibold`}>{title}</Text>
             
             
              <View style={tw`flex-row items-center`}>
              <Icon name='car'/>
              <Text style={{marginLeft:5}}>{travelTime?.duration.text}</Text>
              </View>
            </View>
            <Text style={tw`text-lg`}>
              {/* {new Intl.NumberFormat('en-ng', {
                style: 'currency',
                currency: 'NGN',
              }) */}
              
              {/* .format(
                (travelTime?.duration.value / 60) *
                  price *
                  PRICE_SURGE *
                  multiplier,
              )} */}

              
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          // style={tw`rounded-full py-3 m-3`}>
          style={[!selected ? styles.lightred : styles.bgred, tw`rounded-full py-3 m-3`]}>
          <Text style={tw`text-center text-white  text-lg`}>
            Book {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideCard;

// const styles = StyleSheet.create({
//   grayback: {
//     // backgroundColor: '#888',
//     fontSize: 100,
//   },
//   flex:{
//     flexDirection:'row',
//     alignItems:'center',
//   },
//   space:{
//     marginBottom:120,
//   }
// });
