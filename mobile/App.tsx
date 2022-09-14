import { StatusBar } from 'react-native'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter'
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

import { Home } from './src/screens/Home';

export default function App() {
  // variável para verificar se a home está carregada para nao ocorrer de as fontes carregarem antes da home 
  const [fontsLoaded] = useFonts ({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar
        // deixando a barra de notificações com conteúdo branca e transparente
        barStyle={'light-content'}
        backgroundColor='transparent'
        // background sobrepõe a barra de notificações
        translucent
      />
      
      {// IF TERNÁRIO ( OPTIONAL [!] - condition ? exprIfTrue : exprIfFalse)
      fontsLoaded ? <Home/> : <Loading/>} 

    </Background>
  );
}
