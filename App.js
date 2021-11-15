//UEPA TADS 2021
//Francisco Guilherme Souza Da Costa Junior



import React from 'react';





import { StyleSheet, View, Image, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={estilo.boxText}>
        <Text style={estilo.galleryName}>Galeria de Imagens Do Guilherme</Text>
        <Text style={estilo.galleryTheme}>Jinx</Text>
      </View>
      <View style={estilo.boxImage}>
        {/* Imagens internas */}
        <Image source={require('./src/images/jinx1.jpg')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/jinx2.jpg')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/jinx3.jpg')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/jinx4.jpg')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/ajinx5.jpeg')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/jinx6.jpeg')}
          style={estilo.images}>
        </Image>

        {/* Imagem externa */}
        <Image source={{uri: 'https://s2.glbimg.com/RlN41r-J5zcJvNWGimcP61NrOFE=/0x0:2048x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/y/D/TmQsHgSYAJaSwVfnY5aw/jinx-shot1.jpg'}} 
          style={estilo.images} resizeMode='center'>
        </Image>
      </View>
    </View>
  );
}

{/* Preparando a galeria*/}
const estilo = StyleSheet.create({
  boxImage: { 
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  externalImage: { 
    flex: 1,
    alignItems: 'center'
  },
  images: {
    flex: 1,
    height: 100,
    width: 100,
    resizeMode: 'cover'
  },
  boxText: {
    marginHorizontal: 20, 
    marginVertical: 15 
  },
    galleryName: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    color: '#000000'
  },
  galleryTheme: {
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    color: '#000000'
  }
})