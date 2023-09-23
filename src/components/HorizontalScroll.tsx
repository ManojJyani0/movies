import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Product from './Product';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '../navigation/RootNavigaiton';
import { ProductT } from '../types';
import { capitalizeFirstLetter } from '../helper';

type Props = {
  item: ProductT[];
  title: string;
};

const HorizontalScroll = ({item, title}: Props) => {
    const navigaiton = useNavigation<Navigation>()
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 40,
        }}>
        <Text style={styles.heading}>{capitalizeFirstLetter(title)}</Text>
        <TouchableOpacity 
        onPress={()=>navigaiton.navigate("Category",{cetegory:title})}>
          <Text>see all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item}
        renderItem={item => <Product item={item.item} />}
        horizontal={true}
      />
    </View>
  );
};

export default HorizontalScroll;

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
  heading:{
    fontSize:15,
  }
});
