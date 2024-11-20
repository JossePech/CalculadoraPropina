import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TextButton } from './components/Textbutton';
import { Stepper } from './components/Stepper';
import Resultado from './components/RESULTADO.JS';
import PercentageButton from './components/PercentageButton';
export default function App() {

  const [importe, setImporte] = useState('');
  const [personas, setPersonas] = useState('1');
  const [propina, setPropina] = useState('10');
  
  const [importePropina, setImportePropina] = useState('');
  const [propinaPorPersona, setPropinaPorPersona] = useState('');
  const [importeTotal, setImporteTotal] = useState('');
  const [importePorPersona, setImportePorPersona] = useState('');

  /* function ImporteInputHandler(enteredText) {
    setImporte(enteredText); 
  }  */

  function PersonasInputHandler(enteredText) {
    setPersonas(enteredText); 
  } 

  function PropinaInputHandler(enteredText) {
    setPropina(enteredText); 
  } 

  function OnPercentageButtonTapped (percentage) {
    setPropina(percentage);
  }

  function onCalcularButtonTapped () {
    const Import = parseFloat(importe)
    const person = parseInt(personas)
    const props = parseFloat(propina)

    /* console.log('Importe: ' + importe)
    console.log('NÃºmero de personas: ' + personas)
    console.log('Porcentaje de propina: ' + propina) */

    const importePropina = Import * props / 100; 
    const propinaPorPersona = importePropina / person;
    const importeTotal = Import + importePropina;
    const importePorPersona = importeTotal / person; 
    
    /* console.log('Propina: ' + importePropina)
    console.log('Propina por persona: ' + propinaPorPersona)
    console.log('Importe total: ' + importeTotal)
    console.log('Importe por persona: ' + importePorPersona) */

    setImportePropina(importePropina)
    setPropinaPorPersona(propinaPorPersona)
    setImporteTotal(importeTotal)
    setImportePorPersona(importePorPersona)
  }

  function onLimpiarButtonTapped () {
    setImporte('');
    setPersonas('1');
    setPropina('10');
    setImportePropina('');
    setPropinaPorPersona('');
    setImporteTotal('');
    setImportePorPersona('');
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.containerTop}>
          <Text>Importe: </Text>
          <TextInput
            style= {styles.textInputStyle}
            onChangeText={(enteredText) => {
              setImporte(enteredText);
            }}
            value={importe} /> 
          </View>
          <View style={styles.containerTop1}>
            <Text># personas: </Text>
            <TextInput 
            onChangeText={PersonasInputHandler}
            value={personas.toString()}
            style={styles.textInputStyle}
            keyboardType='decimal-pad' />
            <Stepper 
            minValue="1"
            maxValue="10"
            value={personas}
            onChange={(newValue) => setPersonas(newValue)} />
          </View>
          <View style={styles.commandContainer}> 
            <PercentageButton 
              percentage= '8'
              onPress= {OnPercentageButtonTapped} />
            <PercentageButton 
              percentage= '10' 
              onPress= {OnPercentageButtonTapped} />
            <PercentageButton 
              percentage= '12.5'
              onPress= {OnPercentageButtonTapped} />
            <PercentageButton 
              percentage= '15'
              onPress= {OnPercentageButtonTapped} />
          </View>
          <View style={styles.containerTop1}>
            <Text>% propina: </Text>
            <TextInput 
            onChangeText={PropinaInputHandler}
            value={propina.toString()}
            style={styles.textInputStyle} 
            keyboardType='decimal-pad' />
            <Stepper
            minValue="0"
            maxValue="50"
            increment="0.5"
            value={propina}
            onChange = {(newValue) => setPropina(newValue)} />
          </View>
      </View>

      <View style={styles.commandContainer}>
        <TextButton 
        title= "Calcular"
        onPress={onCalcularButtonTapped} />
        <TextButton 
        title= "Limpiar"
        onPress={onLimpiarButtonTapped}
        buttonStyle={{backgroundColor:'blue', borderColor:'blue'}} />
      </View>

      <View style={styles.resultsContainer}>
        <Resultado
        descripcion='Importe de la propina:'
        valor={importePropina} />
        <Resultado 
        descripcion='Propina por persona:'
        valor={propinaPorPersona} />
        <Resultado 
        descripcion='Importe total:'
        valor={importeTotal} />
        <Resultado 
        descripcion='Importe por persona:'
        valor={importePorPersona} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    flexDirection: 'column'  
  }, 
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16
  },
  containerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  containerTop1: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textInputStyle: {
    borderWidth: 1,
    margin: 4,
    flex: 1 
  },
  commandContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-evenly',
    gap: 32
  },
  resultsContainer: {
    backgroundColor: 'lightgray',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8
  }
});
