import { Text, View } from 'react-native';
import Menu from './src/components/Menu/index';
import Boxes from './src/components/Section_Boxes/index'
import styles from './src/components/style'

export default function App() {
  return (
    <View style = {styles.container}>
      <Menu />
      <Boxes />
      <Boxes />
      <Boxes />
    </View>
  );
}

