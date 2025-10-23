const listaCarros = [];

function registrarCarro() {
    const placa = document.getElementById('placa').value.toUpperCase();
    const entrada = document.getElementById('entrada').value;
    const saidaReal = document.getElementById('saida').value;

    if (!placa || !entrada) {
        alert('Preencha placa e hora de entrada!');
        return;
    }

    const horaEntrada = new Date();
    const [h, m] = entrada.split(':');
    horaEntrada.setHours(parseInt(h));
    horaEntrada.setMinutes(parseInt(m));

    const tempoPermitido = 2; // horas
    const precoPorHora = 5; // R$ por hora
    const horaSaidaPermitida = new Date(horaEntrada.getTime() + tempoPermitido * 60 * 60 * 1000);

    let horaSaidaReal = horaSaidaPermitida;
    if (saidaReal) {
        const [hs, ms] = saidaReal.split(':');
        horaSaidaReal = new Date(horaEntrada);
        horaSaidaReal.setHours(parseInt(hs));
        horaSaidaReal.setMinutes(parseInt(ms));
    }

    // Calcular horas extra
    let horasExtra = Math.ceil((horaSaidaReal - horaSaidaPermitida) / (1000 * 60 * 60));
    if (horasExtra < 0) horasExtra = 0;

    const precoTotal = (tempoPermitido + horasExtra) * precoPorHora;

    const carro = {
        placa,
        entrada: entrada,
        saidaPermitida: `${horaSaidaPermitida.getHours().toString().padStart(2,'0')}:${horaSaidaPermitida.getMinutes().toString().padStart(2,'0')}`,
        horasExtra,
        precoTotal
    };

    listaCarros.push(carro);
    mostrarCarros();

    // Limpar campos
    document.getElementById('placa').value = '';
    document.getElementById('entrada').value = '';
    document.getElementById('saida').value = '';
}

function mostrarCarros() {
    const listaDiv = document.getElementById('lista-carros');
    listaDiv.innerHTML = '';

    listaCarros.forEach(carro => {
        const div = document.createElement('div');
        div.classList.add('carro-card');
        div.innerHTML = `
            <p><strong>Placa:</strong> ${carro.placa}</p>
            <p><strong>Entrada:</strong> ${carro.entrada}</p>
            <p><strong>Saída Permitida:</strong> ${carro.saidaPermitida}</p>
            <p><strong>Horas Extras:</strong> ${carro.horasExtra}</p>
            <p><strong>Preço Total:</strong> R$${carro.precoTotal}</p>
        `;
        listaDiv.appendChild(div);
    });
}
