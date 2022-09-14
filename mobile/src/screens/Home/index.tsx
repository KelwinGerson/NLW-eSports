// FlatList → componente que é utilizado para listas
import { View, Image, FlatList } from 'react-native';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games'

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

    <Heading
      title="Find your duo!"
      subtitle="Select the game you want to play..."
    />

      <FlatList
      data={GAMES}
      // function que define uma chave principal
      keyExtractor={item => item.id}
      // escolhendo qual item eu desejo renderizar
      renderItem={({item}) => (
        <GameCard
          data={item}
        />

      )}
    
    // deixando invisível a barra de rolagem
    showsHorizontalScrollIndicator={false}
    // deixando lista na horizontal
    horizontal
    contentContainerStyle={styles.contentList}
    />


    </View>
  );
}