import { TextInput, Text, View, StyleSheet } from "react-native"

export const Input = () => {
    return(
        <View style={styles.campoInput}>
            <Text style={styles.label}>CEP</Text>
            <TextInput
            placeholder="00000-000"
            style={styles.input}
            maxLength={8}
            ></TextInput>
        </View>
    )
}


const styles = StyleSheet.create({
    campoInput:{
        width: "70%"
    }
})
