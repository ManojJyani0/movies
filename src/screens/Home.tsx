import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import HorizontalScroll from '../components/HorizontalScroll';
import {groupByCategory} from '../helper';
import {RootStackParamList} from '../navigation/RootNavigaiton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductT} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = (props: Props) => {
  const [products, setProducts] = useState<ProductT[]>([]);
  const [cetegorys, setCategoryes] = useState<string[]>([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(data => data.json())
      .then(data => {
        const finalOBJ = groupByCategory(data.products);
        setProducts(finalOBJ);
        setCategoryes(Object.keys(finalOBJ));
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title="Products" />
      <ScrollView>
        {cetegorys?.map((str:string) => (
          <HorizontalScroll key={str} title={str} item={products[str]} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
    padding: 10,
  },
});
