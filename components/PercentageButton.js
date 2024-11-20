import { View, StyleSheet } from "react-native";
import { TextButton } from "./Textbutton";

export default function PercentageButton (props) {
    return(
        <View>
            <TextButton title={props.percentage + '%'}
            buttonStyle= {styles.PercentageButtonStyle} 
            onPress= {() => props.onPress(props.percentage)} />
        </View>
    );
}

const styles = StyleSheet.create({
    PercentageButtonStyle: {
        minWidth: 70,
        alignItems: 'center',
    }
});