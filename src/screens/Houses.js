import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import houses from '../constants/houses';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Box,
  Input,
  Icon,
  SearchIcon,
  Button,
  ArrowUpIcon,
  InfoOutlineIcon,
  ScrollView,
} from 'native-base';

const Houses = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView
        marginX={'3'}
        // remove scrollbar
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '900',
            marginVertical: 10,
            marginLeft: 20,
            color: '#222',
          }}>
          Houses
        </Text>
        {/* loop houses */}
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
          {/* make a search box */}
          <Input
            leftElement={<SearchIcon size={5} marginLeft={2} />}
            bg={'gray.200'}
            margin="2"
            width={'75%'}
            borderRadius={'10'}
            placeholder="Search"
            variant="filled"
          />
          <Button
            style={{
              marginHorizontal: 20,
              borderRadius: 10,
              backgroundColor: '#222',
            }}>
            <Text style={{color: '#fff'}}>Filter</Text>
          </Button>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          {houses.map(house => (
            <Box
              borderColor={'gray.300'}
              padding="5px"
              marginBottom={'10px'}
              borderWidth="1"
              key={house.id}
              style={{
                border: '1px solid #222',
                shadowColor: '#000',
                borderRadius: 10,
                width: '45%',
              }}>
              <Image
                source={house.image}
                alt="house"
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: 100,
                  borderRadius: 10,
                }}
              />
              <Pressable
                onPress={() =>
                  navigation.navigate('HouseDetails', {house: house})
                }>
                <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
                  {' '}
                  {house.title}
                </Text>
              </Pressable>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'light',
                  marginVertical: 3,
                }}>
                {house.price}
              </Text>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'light',
                    marginTop: 3,
                  }}>
                  {house.location}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Houses;
