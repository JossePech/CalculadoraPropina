import { StyleSheet, View } from "react-native";
import { TextButton } from "./Textbutton";

export function Stepper(props) {
    const defaultMinValue = 0;
    const defaultMaxValue = 100;
    const defaultIncrement = 1;
    const defaultValue = defaultMinValue; 

    const minValue = props.minValue === null || props.minValue === undefined ? defaultMinValue : parseFloat(props.minValue);

    const maxValue =  props.maxValue === null || props.maxValue === undefined ? defaultMaxValue : parseFloat (props.maxValue);
    const increment = props.increment === null || props.increment === undefined ? defaultIncrement: parseFloat (props.increment);
    let value = props.value === null || props.value === undefined ? defaultValue
    : parseFloat (props.value);

    function onDecrementButtonTapped() {
        if (value - increment < minValue) {
            return;
        }
        value -= increment;
        props.onChange(value);
    }

    function onIncrementButtonTapped() {
        if (value + increment > maxValue) {
            return;
        }
        value += increment;
        props.onChange(value);
    }

    return(
        <View style={styles.mainContainer}>
            <TextButton 
            title="-"
            buttonStyle={styles.minusButtonStyle} 
            textStyle={styles.buttonTextStyle}
            onPress = {onDecrementButtonTapped} />
            <TextButton 
            title="+"
            buttonStyle={styles.plusButtonStyle}
            textStyle={styles.buttonTextStyle}
            onPress= {onIncrementButtonTapped} />
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 2
    },
    plusButtonStyle: {
        borderColor: 'gray',
        backgroundColor: 'gray',
        minWidth: 36,
        minHeight: 36,
        alignItems: 'center'
    },
    minusButtonStyle: {
        borderColor: 'lightgray',
        backgroundColor: 'lightgray',
        minWidth: 36,
        minHeight: 36,
        alignItems: 'center'
    },
    buttonTextStyle: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
});
