import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, StatusBar} from 'native-base';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{backgroundColor: '#fff'}}>
        <StatusBar translucent backgroundColor="transparent" />

        <Image
          source={require('../../assets/house2.jpeg')}
          alt="house"
          resizeMode="cover"
          style={{
            width: '100%',
            height: 450,
          }}
        />
        <View
          style={{
            borderRadius: 20,
            marginTop: -20,
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '900',
              marginTop: 20,
              marginLeft: 20,
              color: '#222',
            }}>
            Home Finder
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'light',
              marginTop: 20,
              marginLeft: 20,
              color: 'gray',
            }}>
            The best place to find your home. Schedule a visit to your favorite
            homes and get to know the neighborhood in person.
          </Text>

          {/* make a button */}

          <Button
            onPress={() => navigation.navigate('Houses')}
            style={{
              marginTop: 50,
              marginHorizontal: 20,
              backgroundColor: '#000',
              borderRadius: 20,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>
              Find Your Home
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
