// TouchableOpacity torna a tela clicável
import { TouchableOpacity,TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

// interface que poderá ser utilizada em outro local e tem o que precisa para renderizar a imagem
export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
} 
// definindo o que é necessário 
interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

// '...rest' está pegando todas as propriedades do extends sem precisar definir nome a nome
export function GameCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container}{...rest}>
        <ImageBackground
            style={styles.cover}
            source={data.cover}
        >
            <LinearGradient
            colors={THEME.COLORS.FOOTER}
            style={styles.footer}
             >
                <Text style={styles.name}>
                    {data.name}
                </Text>
            
                <Text style={styles.ads}>
                    {data.ads} anúncios
                </Text>
             </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>


  );    
}
