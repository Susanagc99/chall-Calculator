import { colors } from '@/constants/theme';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
    text: string;
    color?: string;
    size?: string;
    colorText?: string;
}

export const ButtonCalc = ({
    text, 
    color= colors.darkGray,
    size= "md",
    colorText= colors.textPrimary,
}:Props) => {
    return (
        <Pressable 
        style={{
            ...styles.button,
            backgroundColor: color,
            width: size === "lg" ? 180 : 80,
        }}>
            <Text 
            style= {{
                ...styles.text,
                color: colorText,
            }}
            >
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
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