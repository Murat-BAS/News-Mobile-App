import { SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../style"

const boxes = () =>{
    return(
        <SafeAreaView style={styles.box_container}>
            <TouchableOpacity style={styles.box_main}>
                <Image source={require('./Img/img-one.jpg')} style={styles.box_img}></Image>
                <Text style={styles.box_title}>Başlik</Text>
                <Text style = {styles.box_text}>Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem lorem Lorem lorem lorem lorem</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default boxes;