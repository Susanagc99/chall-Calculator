import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
    text: string
    color?: string
    size?: "md" | "lg"
    colorText?: string
}

export const ButtonCalc = ({
    text, 
    color="gray",
    size="md",
    colorText="white"
}:Props) => {
    return (
        <Pressable style={{
            ...styles.button,
            backgroundColor: color,
            width: size === "lg" ? 180 : 80,
        }}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#333333',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 30,
    },
});