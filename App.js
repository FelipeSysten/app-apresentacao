import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, SafeAreaView, Pressable, Linking } from 'react-native';


const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/76599815?v=4';
const urlToMyGithub = 'https://portf-lio-pessoal-kkpbnbydj-felipesysten.vercel.app/';
const urlToMyWhatsapp = 'https://web.whatsapp.com/send?phone=5573988433532';

export default function App() {


  const handlePressGoToWhatsapp = async () =>{
    const res = await Linking.canOpenURL(urlToMyWhatsapp);
    if(res){
      await Linking.openURL(urlToMyWhatsapp)
    }
  };
  const handlePressGoToGithub = async () =>{
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      await Linking.openURL(urlToMyGithub)
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor= 'white' barStyle='light-content' />
    <View style={styles.content} >
      <Image style={styles.avatar} source={{uri: imageProfileGithub}}/>
      <Text style={[styles.defaultText, styles.name]}>Felipe de Souza</Text>
      <Text style={[styles.defaultText, styles.nickname]}>FelipeSysten</Text>
      <Text style={[styles.defaultText, styles.description]}>Desenvolvedor Full Stack - ReactJS | React Native | NodeJS | Javascript | Typescript</Text>
      <Pressable onPress={handlePressGoToWhatsapp}>
      <View style={styles.Button}>
        <Text >Open in WhatsApp</Text>
      </View>
    </Pressable>
    <Pressable onPress={handlePressGoToGithub}>
      <View style={styles.Button}>
        <Text >Open in Portfólio</Text>
      </View>
    </Pressable>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGithub,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
    
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },

  defaultText: {
    color: 'white',
  },
  name: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname:{
    fontSize: 16,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
    padding: 20,
  },
  Button: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
 
});
