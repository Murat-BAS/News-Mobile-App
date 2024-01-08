import { Text, View, SafeAreaView } from 'react-native';
import Menu from './src/components/Menu/index';
import Boxes from './src/components/Section_Boxes/index'
import styles from './src/components/style'

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <Menu />
      <Text style = {styles.catogory_title}>NEWS</Text>
      <Boxes />
      <Boxes />
      <Boxes />
    </SafeAreaView>
  );
}

