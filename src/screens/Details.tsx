import {StyleSheet, Text, View} from 'react-native';
import React, { useState} from 'react';
import Header from '../components/Header';
import ImageViewer from 'react-native-image-zoom-viewer';
import {RootStackParamList} from '../navigation/RootNavigaiton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { ProductT } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({
  route: {
    params: {item},
  },
}: Props) => {
  const [product, setProduct] = useState<ProductT>(item);
  const images = item.images.map((url: any) => ({url}));
  console.log(images);

  return (
    <View style={styles.container}>
      <Header title={'Product Details '} />
      <View style={styles.image}>
        <ImageViewer imageUrls={images} enableImageZoom={true} />
      </View>
      <View style={[styles.container, {alignItems: 'center'}]}>
        {/* Product details */}
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>

        {/* Other information */}
        <Text style={styles.brand}>Brand: {product.brand}</Text>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  brand: {
    fontSize: 16,
    marginTop: 10,
  },
  stock: {
    fontSize: 16,
    marginTop: 5,
  },
  image: {
    height: 300,
  },
});
