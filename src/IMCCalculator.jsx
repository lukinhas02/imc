import React, { useState } from 'react';

const IMCCalculator = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [mensagem, setMensagem] = useState('');

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (!pesoNum || !alturaNum || alturaNum <= 0) {
            setResultado('Por favor, insira valores válidos.');
            setMensagem('');
            return;
        }

        const imc = pesoNum / (alturaNum * alturaNum);
        setResultado(`Seu IMC é: ${imc.toFixed(2)}`);

        if (imc < 18.5) {
            setMensagem('Baixo peso');
        } else if (imc >= 18.5 && imc < 25) {
            setMensagem('Normal');
        } else if (imc >= 25 && imc < 30) {
            setMensagem('Sobrepeso');
        } else {
            setMensagem('Obesidade');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Calculadora de IMC</h1>
            <input
                type="number"
                placeholder="Peso (kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            <input
                type="number"
                placeholder="Altura (m)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <button onClick={calcularIMC}>Calcular IMC</button>
            {resultado && <h2>{resultado}</h2>}
            {mensagem && <h3>{mensagem}</h3>}
        </div>
    );
};

export default IMCCalculator;   