import { useState } from "react"

export const useCalculator = () => {
    const [value1, setValue1] = useState<string>("0");
    const [value2, setValue2] = useState<string>("0");
    const [operator, setOperator] = useState<string>("0");
    const [result,setResult] = useState<string>("0");
    
    //Construir números
    const buildNumber = (num: string) => {

        if (operator === "0") {

            if (value1.includes('.') && num === '.') return;

            if (value1 === "0") {
                setValue1(num);
            } else {
                setValue1(value1 + num);
            }
        } else {
            // ya tenemos un operador, ahora escribimos el segundo número
        if (value2.includes('.') && num === '.') return;

        if (value2 === "0") {
                setValue2(num);
            } else {
                setValue2(value2 + num);
            }
        }
    };


    //manejar operadores
    const handleOperator = (op: string) => {
        if (operator !== "0") {
            //si ya hay un operador, calcular el primero
            calculate();
        } else {
            setOperator(op);
        }
    }


    //calcular el resultado y/o dirigir a la vista secreta
    const SECRET_CODE = "8304";

    const calculate = () => {
        if (value1 === SECRET_CODE){
            return "SECRET";
        }

        if (operator === "0" || value2 === "0") return;
    
        let resultado = 0;
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);
    
        switch (operator) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
            default:
                return;
        }
    
        setResult(resultado.toString());
        setValue1(resultado.toString());
        setValue2("0");
        setOperator("0");
    }


    //Limpiar todo
    const resetValue = () => {
        setValue1("0");
        setValue2("0");
        setOperator("0");
        setResult("0");
    };


    //construir el texto de la operación
    const getOperation = () => {
        if (operator === "0") {
            return value1;
        }
        return `${value1} ${operator} ${value2}`
    };

    return {
        //props
        value1,
        operator,
        value2,
        result,

        //funcs
        buildNumber,
        handleOperator,
        calculate,
        resetValue,
        getOperation,
    };
};