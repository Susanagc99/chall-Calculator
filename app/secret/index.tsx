import { colors } from "@/constants/theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export default function SecretView()  {

    return (

        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.title}>Private files</Text>

            <View style={styles.folder}>
                <Ionicons name="image-outline" size={30} color="white"/>
                <View style={{ marginLeft: 15 }} >
                    <Text style={styles.foldername}>Images</Text>
                    <Text style={styles.foldersub}>8 files</Text>
                </View>
            </View>

            <View style={styles.folder}>
                <Ionicons name="videocam-outline" size={30} color="white"/>
                <View style={{ marginLeft: 15 }} >
                    <Text style={styles.foldername}>Videos</Text>
                    <Text style={styles.foldersub}>5 files</Text>
                </View>
            </View>

            <View style={styles.folder}>
                <Ionicons name="musical-notes-outline" size={30} color="white"/>
                <View style={{ marginLeft: 15 }} >
                    <Text style={styles.foldername}>Audios</Text>
                    <Text style={styles.foldersub}>Empty</Text>
                </View>
            </View>

            <View style={styles.folder}>
                <Ionicons name="document-text-outline" size={30} color="white"/>
                <View style={{ marginLeft: 15 }} >
                    <Text style={styles.foldername}>Documents</Text>
                    <Text style={styles.foldersub}>Empty</Text>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content:{
        paddingTop: 60,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 40,
        marginTop:20,
        color: colors.textPrimary,
    },
    folder: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: colors.darkGray,
        borderRadius: 14,
        marginBottom: 12,
    },
    foldername: {
        color: colors.textPrimary,
        fontSize: 18,
        fontWeight: "bold"
    },
    foldersub: {
        color: colors.orange,
        fontSize: 16,
    }
});
