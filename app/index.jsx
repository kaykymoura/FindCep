import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { Input } from "../components/input/input";
import { Botao } from "../components/botao/botao";
import { Card } from "../components/card/card";

export default function Index() {
  return (
    <>
      {/* 1- {logo + imagem de fundo} */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/LogoFindCEP.png')} style={styles.logo}></Image>
      </ImageBackground>
      {/* 2- {campo de consulta} */}
      <View style={styles.container}>
        {/* 2.1- {titulo} */}
        <Text style={styles.titulo}>Consulte seu CEP</Text>
      {/* 2.2- {input} */}
      <Input />
      {/* 2.3- {botão de consulta} */}
      <Botao tituloBotao='Consultar' />
      {/* 2.4- {Card de informacoes} */}
      <Card  card="Informações do CEP" />
      </View>

    </>
  );
}

//Estilos dos meus componentes:
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 100,
    height: 120
  },
  container: {
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
})