import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <SafeAreaView style={styles.conteudo}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Olá Mundo!</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

  conteudo: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'red',
    margin: 10,
  },

  titulo: {
    color: '#f00',
    fontSize: 48,
  },
});
