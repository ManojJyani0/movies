import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Navigation} from '../navigation/RootNavigaiton';
import {ProductT} from '../types';

type Props = {
  item: ProductT;
};

const Product = ({item}: Props) => {
  const navigation = useNavigation<Navigation>();
  const [visible, setVisible] = useState<boolean>(false);
  const images = item.images.map((url: string) => ({url}));
  return (
    <View style={styles.container}>
      <Modal visible={visible} transparent={true}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Text>close</Text>
        </TouchableOpacity>
        <ImageViewer imageUrls={images} />
      </Modal>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image
          resizeMode="center"
          style={{width: 100, height: 100, backgroundColor: '#5d5e5e'}}
          source={{
            uri: item.thumbnail,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
        <Text style={styles.textSolid}>{item.title}</Text>
        <Text style={styles.text}>{item.brand}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 120,
    backgroundColor: '#4141',
  },
  textSolid: {
    fontSize: 15,
    fontWeight: '600',
  },
  text: {
    fontSize: 10,
  },
});
