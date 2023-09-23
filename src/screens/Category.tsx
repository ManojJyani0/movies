import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import {RootStackParamList} from '../navigation/RootNavigaiton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductT} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;

const Category = ({
  route: {
    params: {cetegory},
  },
}: Props) => {
  const [products, setProducts] = useState<ProductT[]>([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${cetegory}`)
      .then(data => data.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <View style={styles.container}>
      <Header title={cetegory} />
      {products.map(item => (
        <Product key={item.id} item={item} />
      ))}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#414141',
  },
});
