import { View, Text, StyleSheet, ScrollView } from "react-native";

export const Card = ({ card }) => {
    return (
        <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
            <Text>{card}</Text>
            <View>
                <Text>CEP:</Text>
                <Text>Dado 01:</Text>
            </View>
            <View>
                <Text>Logradouro:</Text>
                <Text>Dado 02:</Text>
            </View>
            <View>
                <Text>Bairro:</Text>
                <Text>Dado 03:</Text>
            </View>
            <View>
                <Text>UF:</Text>
                <Text>Dado 04:</Text>
            </View>
            <View>
                <Text>Estado:</Text>
                <Text>Dado 05:</Text>
            </View>
            <View>
                <Text>Região:</Text>
                <Text>Dado 06:</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "70%",
        height: "100%",
        padding: 20,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }
});
