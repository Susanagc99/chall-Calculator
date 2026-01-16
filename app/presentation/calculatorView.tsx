import { ButtonCalc } from "@/components/buttonCalc";
import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

export const CalculatorView = () => {
    return (
        <View style={styles.container}>
            
            <View style={styles.row}>
                <ButtonCalc 
                text="C" 
                color={colors.lightGray}
                colorText={colors.background} 
                />
                <ButtonCalc 
                text="+/-"
                color={colors.lightGray}
                colorText={colors.background} 
                />
                <ButtonCalc 
                text="%"
                color={colors.lightGray}
                colorText={colors.background} 
                />
                <ButtonCalc 
                text="/" 
                color={colors.orange}
                />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="7" />
                <ButtonCalc text="8" />
                <ButtonCalc text="9" />
                <ButtonCalc 
                text="*" 
                color={colors.orange} 
                />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="4" />
                <ButtonCalc text="5" />
                <ButtonCalc text="6" />
                <ButtonCalc 
                text="-" 
                color={colors.orange} 
                />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="1" />
                <ButtonCalc text="2" />
                <ButtonCalc text="3" />
                <ButtonCalc 
                text="+" 
                color={colors.orange} 
                />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="0" size="lg" />
                <ButtonCalc text="." />
                <ButtonCalc 
                text="=" 
                color={colors.orange} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#000000",
        alignItems: "center",
        paddingBottom: 40,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        marginTop: 12,
    },
});
