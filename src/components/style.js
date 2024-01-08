import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
    },
    /* Menu Start */
    menu_container: {
        flexDirection: "row",
        backgroundColor: "#000",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1
    },
    menu_box: {
        backgroundColor: "yellow",
        padding: 5,
    },
    /* Menu End */

    /* Section Box */
    box_container: {
        backgroundColor: "#fff",
        flex: 4,
        flexDirection: "row"
    },
    box_main:{
        flex: 1,
        backgroundColor: "yellow",
        padding: 10,
        margin: 10,
    },
    box_img: {
        flex: 2,
        width: "100%",
        marginBottom: 5
    },
    box_title: {
        flex: 1,
        fontSize: 30,
    },
    box_text: {
        flex: 1,
        alignItems: "center"
    },
    catogory_title: {
        fontSize: 32,
        fontWeight: "600"
    }
})

export default Style