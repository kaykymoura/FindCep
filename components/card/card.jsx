import { View, Text, StyleSheet, ScrollView } from "react-native";

export const Card = ({ card }) => {
    return (
        <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
            <Text>{card}</Text>
            <View style={styles.textos}>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text style={styles.Valor}>Dado 01:</Text>
            </View>
            <View style={styles.textos}>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.Valor}>Dado 02:</Text>
            </View>
            <View style={styles.textos}>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.Valor}>Dado 03:</Text>
            </View>
            <View style={styles.textos}>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.Valor}>Dado 04:</Text>
            </View>
            <View style={styles.textos}>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text style={styles.Valor}>Dado 05:</Text>
            </View>
            <View style={styles.textos}>
                <Text style={styles.tituloValor}>Região:</Text>
                <Text style={styles.Valor}>Dado 06:</Text>
            </View>
             
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "70%",
        minHeight: "40%",
        padding: 20,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: 7,
        gap: 20,
    
},
tituloValor: {
    fontWeight: 600
},
Valor: {
    fontWeight: 400
},
   textos: {
    marginBottom: 10,
   }
});
