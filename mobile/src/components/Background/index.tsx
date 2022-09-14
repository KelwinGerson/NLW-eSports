import { ImageBackground } from 'react-native';

import backgroundImg from 'D:/Users/Kelwin/Documents/ASchool/Rocketset/Nova pasta/mobile/src/assets/background-galaxy.png'

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground 
      source={backgroundImg} 
      style={styles.container}
      //memoriza a imagem padrão, carregando melhor e ganhando a velocidade
      defaultSource={backgroundImg}
    >
        {children}
    </ImageBackground>
  );
}