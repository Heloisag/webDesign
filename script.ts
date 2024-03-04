function calcularApolice() {
    const nomeSegurado = document.getElementById('nomeSegurado') as HTMLInputElement;
    const sexo = document.getElementById('sexo') as HTMLSelectElement;
    const idade = document.getElementById('idade') as HTMLInputElement;
    const valorAutomovel = document.getElementById('valorAutomovel') as HTMLInputElement;

    const resultadoElement = document.getElementById('resultado');

    if (nomeSegurado && sexo && idade && valorAutomovel && resultadoElement) {
        const nomeSeguradoValue = nomeSegurado.value;
        const sexoValue = sexo.value;
        const idadeValue = parseInt(idade.value);
        const valorAutomovelValue = parseFloat(valorAutomovel.value);

        let valorApolice: number;

        if (sexoValue.toLowerCase() === 'masculino') {
            valorApolice = idadeValue <= 25 ? 0.85 * valorAutomovelValue : 0.90 * valorAutomovelValue;
        } else if (sexoValue.toLowerCase() === 'feminino') {
            valorApolice = idadeValue <= 25 ? 0.90 * valorAutomovelValue : 0.92 * valorAutomovelValue;
        } else {
            alert("Sexo não reconhecido. Por favor, escolha 'Masculino' ou 'Feminino'.");
            return;
        }

        const resultadoParagraph = document.createElement('p');
        resultadoParagraph.innerHTML = `Nome do Segurado: ${nomeSeguradoValue}<br>Valor da Apólice de Seguro: R$${valorApolice.toFixed(2)}`;

        resultadoElement.innerHTML = '';
        
        resultadoElement.appendChild(resultadoParagraph);
    }
}
