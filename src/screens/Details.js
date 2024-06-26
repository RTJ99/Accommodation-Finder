import {Button} from 'native-base';
import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Linking,
  ScrollView,
  Platform,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import colors from '../constants/colors';
const HouseDetails = ({route}) => {
  const [emailAddress, setEmailAddress] = React.useState('ryantjena@gmail.com');
  const [emailSubject, setEmailSubject] = React.useState('House Enquiry');
  const [emailBody, setEmailBody] = React.useState(
    'I am interested in this house',
  );
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({item, index}) => {
    // concat house.image and house.interiors

    return (
      <View
        key={index}
        style={{alignItems: 'center', padding: 10, marginLeft: -10}}>
        <Image source={item} style={{width: screenWidth, height: 400}} />
      </View>
    );
  };

  const handlePress = () => {
    const emailUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    Linking.openURL(emailUrl);
  };
  const {house} = route.params;
  const images = [house.image, ...house.interiors];
  const renderPagination = () => {
    const dots = [];
    for (let i = 0; i < images?.length; i++) {
      const dotColor = activeSlide === i ? '#000' : 'grey';
      dots.push(
        <View key={i} style={[styles.dot, {backgroundColor: dotColor}]} />,
      );
    }
    return <View style={styles.paginationContainer}>{dots}</View>;
  };

  return (
    <ScrollView style={styles.container}>
      <View
        // onPress={() => viewPicture()}
        style={{
          marginTop: -60,
          width: '100%',
          height: 400,
          position: 'relative',
        }}>
        {/* <Image
              source={{
                uri:
                  user?.profile_data?.profile_picture_url === null
                    ? 'https://www.linkpicture.com/q/logoPinkBg.png'
                    : baseUrl + '/' + user?.profile_data?.profile_picture_url,
              }}
              alt="house"
              resizeMode="cover"
              style={{
                width: '100%',
                height: 400,
              }}

            /> */}
        <Carousel
          layout="tinder"
          data={images}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={screenWidth}
          keyExtractor={(item, index) => index.toString()}
          onSnapToItem={index => setActiveSlide(index)}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 50,
            backgroundColor: 'white',
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          {renderPagination()}
        </View>
      </View>
      {/* <Image source={house.image} style={styles.image} /> */}
      <Text style={styles.details}>Details</Text>
      <Text style={styles.contact}>
        5 Bedrooms, Insuite Laundry, 2 Bathrooms, 2 Car Garage
      </Text>
      <Text style={styles.details}>Contact Owner</Text>
      <Text style={styles.contact}>John Doe, john@example.com</Text>
      <Text style={styles.contact}>Phone: +263 73 555 1234</Text>
      <Text style={styles.details}>Location</Text>
      <Text style={styles.location}>123 Main St, Anytown, Budiriro</Text>

      {/* put a button */}
      <Button
        // when you press go to dial pad
        onPress={handlePress}
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: '#000',
        }}>
        <Text style={{color: '#fff'}}>Enquire </Text>
      </Button>
    </ScrollView>
  );
};
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    width: screenWidth - 60,
    height: screenHeight - 350,
    marginTop: 50,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 30,
  },
  inactiveDot: {
    backgroundColor: colors.gray,
  },
  activeDot: {
    backgroundColor: colors.dark,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideContainer: {
    width: screenWidth,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    marginBottom: 10,
  },
  details: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contact: {
    marginHorizontal: 20,
    fontSize: 16,
    marginBottom: 5,
  },
  location: {
    marginHorizontal: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default HouseDetails;
