import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps{
  title: String;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.button}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}> 
        Seja Bem vindo Kelwin! Este é seu primeiro aplicativo mobile!
      </Text>
      <Button title='Começar'/> 
      <StatusBar style="auto" backgroundColor='black' />
      
    </View>
  );
}

{/* DEFININDO ESTILOS */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center', 
    fontStyle: 'italic'
    
  },
  button: {
    color: '#fff'
  }
});
