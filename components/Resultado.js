import { StyleSheet, Text, View } from 'react-native';

export default function Resultado(props) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.resultTextStyles}>{props.descripcion}</Text>
            <Text style={[styles.resultTextStyles, styles.valorStyle]}>{props.valor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    resultTextStyles: {
        fontSize: 18,
    },
    valorStyle:{
        justifyContent: 'flex-end',
    }
});