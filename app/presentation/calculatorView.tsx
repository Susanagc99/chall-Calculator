import { ButtonCalc } from "@/components/buttonCalc";
import React from "react";
import { StyleSheet, View } from "react-native";


export const CalculatorView = () => {
    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <ButtonCalc text="C"/>
                <ButtonCalc text="+/-" />
                <ButtonCalc text="%" />
                <ButtonCalc text="/" color="#f89a0c"/>
            </View>

            <View style={styles.row}>
                <ButtonCalc text="7"/>
                <ButtonCalc text="8" />
                <ButtonCalc text="9" />
                <ButtonCalc text="*" color="#f89a0c" />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="4"/>
                <ButtonCalc text="5" />
                <ButtonCalc text="6" />
                <ButtonCalc text="-" color="#f89a0c"/>
            </View>

            <View style={styles.row}>
                <ButtonCalc text="1"/>
                <ButtonCalc text="2" />
                <ButtonCalc text="3" />
                <ButtonCalc text="+" color="#f89a0c" />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="0" size="lg"/>
                <ButtonCalc text="." />
                <ButtonCalc text="=" />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent: 'flex-end',
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingBottom: 40,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        marginTop: 12,
    }


});