# Sistema de Controle de Estacionamento - Torugo

## 📋 Sobre o Projeto
O Sistema de Controle de Estacionamento nasceu da ideia de facilitar a vida de quem precisa gerenciar veículos em estacionamentos. Ele registra de forma automática a **placa**, o **horário de entrada** e o **horário de saída**, eliminando planilhas, anotações manuais e possíveis erros humanos.

Com ele, você consegue **ver quem está no estacionamento em tempo real**, calcular rapidamente quanto tempo cada veículo ficou parado e manter um histórico organizado. É uma ferramenta que pode ser usada em **estacionamentos comerciais, residenciais ou empresariais**, deixando tudo mais ágil, seguro e confiável.

## 🏁 Motivação
A ideia do projeto surgiu porque muitas vezes estacionamentos ainda dependem de controles manuais. Isso dá muito trabalho, gera erros de registro e dificulta saber exatamente quem está ou não no local.

Decidimos criar uma solução **simples, prática e eficiente**: um sistema que registra tudo automaticamente, calcula o tempo de permanência e mantém os dados organizados.

Além de resolver esse problema real, o projeto também foi uma oportunidade de **colocar em prática conhecimentos de programação**, testar lógica, manipulação de dados e construir algo que realmente faz diferença no dia a dia.

## 💻 Tecnologias Implementadas
- **HTML:** Estrutura do site e organização das páginas do sistema.  
- **CSS:** Estilização das páginas para criar uma interface agradável e responsiva.  
- **JavaScript:** Lógica do sistema, como registro de entrada e saída de veículos, cálculo de tempo e atualização das informações em tempo real.  
- **Armazenamento de dados:** Os registros podem ser salvos localmente (ex.: LocalStorage) ou em um banco de dados simples, garantindo que os dados fiquem organizados e acessíveis.

## 🧠 Funcionalidades
- 📥 **Registro de entrada:** basta informar a placa e o horário é registrado automaticamente.  
- 📤 **Registro de saída:** ao sair, o sistema registra o horário e calcula o tempo que o veículo ficou no estacionamento.  
- ⏱️ **Cálculo automático:** você sabe instantaneamente quanto tempo cada carro passou no local.  
- 📋 **Consulta em tempo real:** veja rapidamente quais veículos estão estacionados.  
- 🧾 **Histórico de movimentação:** acompanha todas as entradas e saídas anteriores.  
- ⚙️ **Fácil de expandir:** modularidade que permite melhorias futuras, como cálculo de tarifas ou reconhecimento de placas.

## 🗺️ Roadmap do Projeto
Para organizar o desenvolvimento, dividimos o sistema em fases:

### Fase 1: Registro Básico
- Configurar o ambiente de desenvolvimento.  
- Criar o registro de entrada de veículos com placa e horário.  
- Armazenar os dados em arquivos ou banco de dados simples.  

### Fase 2: Registro de Saída e Cálculo de Tempo
- Criar o registro de saída e calcular automaticamente quanto tempo o veículo ficou no estacionamento.  
- Garantir que os dados sejam consistentes e precisos.  

### Fase 3: Consulta e Histórico
- Permitir ver todos os veículos estacionados em tempo real.  
- Criar histórico completo de entradas e saídas para consultas futuras.  

### Fase 4: Recursos Adicionais
- Estruturar o sistema para facilitar manutenção e expansão.  
- Possíveis futuras melhorias: interface gráfica, integração com câmeras de reconhecimento de placas ou cálculo automático de tarifas.