import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { Input } from "../components/input/input";
import { Botao } from "../components/botao/botao";
import { Card } from "../components/card/card";
import axios from "axios";

export default function Index() {
  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});
  const [coords, setCoords] = useState(null); // Coordenadas para o mapa

  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("#4CAF50"); 

  async function consultarCEP(cep) {
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setJsonCep(resposta.data);

        // Consulta coordenadas via AwesomeAPI
        const geoRes = await axios.get(`https://cep.awesomeapi.com.br/json/${cep}`);
        if (geoRes.data.lat && geoRes.data.lng) {
          setCoords({
            latitude: parseFloat(geoRes.data.lat),
            longitude: parseFloat(geoRes.data.lng),
          });
        } else {
          setCoords(null);
        }

        setAlertTitle("Sucesso!");
        setAlertMessage(`CEP ${resposta.data.cep} consultado com sucesso`);
        setAlertColor("#4CAF50"); 
        setShowAlert(true);
      } else {
        setAlertTitle("Erro");
        setAlertMessage("Digite um CEP válido");
        setAlertColor("#F44336"); 
        setShowAlert(true);
        setJsonCep({});
        setCep(""); 
        setCoords(null);
      }
    } catch (error) {
      console.error("Erro ao consultar CEP:", error);
      setAlertTitle("Erro");
      setAlertMessage("Não foi possível consultar o CEP");
      setAlertColor("#F44336");
      setShowAlert(true);
      setJsonCep({});
      setCep(""); 
      setCoords(null);
    }
  }

  return (
    <>
      <View style={styles.imgFundoContainer}>
        {coords ? (
          <iframe
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps?q=${coords.latitude},${coords.longitude}&hl=pt-BR&z=15&output=embed`}
            allowFullScreen
          ></iframe>
        ) : (
          <Image source={require('../assets/images/ImgFundo.png')} style={styles.imgFundo} />
        )}
        <Image source={require('../assets/images/LogoFindCEP.png')} style={styles.logo} />
      </View>

      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Consulte seu CEP</Text>

          <Input valorCep={cep} onChangeValorCep={e => setCep(e)} />

          <Botao tituloBotao='Consultar' onPress={() => consultarCEP(cep)} />

          {jsonCep.cep && (
            <Card
              card="Informações do CEP"
              cep={jsonCep.cep}
              logradouro={jsonCep.logradouro}
              bairro={jsonCep.bairro}
              uf={jsonCep.uf}
              estado={jsonCep.estado}
              regiao={jsonCep.regiao}
            />
          )}
        </View>
      </ScrollView>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={alertTitle}
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor={alertColor}
        onConfirmPressed={() => setShowAlert(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imgFundoContainer: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  imgFundo: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 100,
    height: 120,
    position: "absolute",
    top: 20,
  },
  container: {
    gap: 30,
    width: "100%",
    minHeight: "100%",
    alignItems: "center",
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    height: "100%",
    paddingBottom: 60,
  },
  titulo: {
    fontSize: 25,
    fontFamily: "banana-bold",
    color: "#000000",
  },
});
