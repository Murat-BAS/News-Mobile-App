import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import styles from "../style";

const New_box = (props) => {
    return (
        <SafeAreaView style={styles.menu_container}>
            <TouchableOpacity>
                <Text style={styles.menu_box}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.menu_box}>World</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.menu_box}>Nature</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.menu_box}>War</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.menu_box}>Economy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.menu_box}>Act of god</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default New_box;
