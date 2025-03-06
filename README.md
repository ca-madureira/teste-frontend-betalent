# BeTalent Funcionários - Painel Administrativo

## Sobre o Projeto

Este projeto é um painel administrativo desenvolvido em React com Typescript e Tailwind CSS (versão 4) para visualizar e pesquisar informações dos funcionários da BeTalent. Ele apresenta os dados em uma tabela organizada e oferece funcionalidades de busca por nome, cargo ou telefone. O design é responsivo, garantindo uma boa experiência em diversos dispositivos.

**Funcionalidades:**

- **Visualização de Funcionários:** Exibe uma tabela com informações detalhadas de cada funcionário.
- **Pesquisa:** Permite pesquisar funcionários por nome, cargo ou telefone.
- **Design Responsivo:** Adapta-se a diferentes tamanhos de tela para uma visualização otimizada.
- **Tecnologias:** Construído com React, Typescript e Tailwind CSS (v4) para um desenvolvimento moderno e eficiente.

## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter os seguintes pré-requisitos instalados:

- **Node.js:** (Versão 16 ou superior recomendada) - Necessário para executar o `json-server` e o projeto React.
- **npm (Node Package Manager):** Geralmente instalado com o Node.js.

## Instruções para Rodar a Aplicação

Siga os passos abaixo para configurar e executar o projeto:

1.  **Iniciar o Servidor JSON:**

    - Abra um terminal e navegue até o diretório raiz do projeto.
    - Execute o seguinte comando para iniciar o servidor JSON com o arquivo `db.json`:

      ```bash
      json-server --watch db.json --port 3001
      ```

    **Observação:** O `--port 3001` define a porta em que o json-server irá rodar. Certifique-se de ajustar as configurações do projeto caso altere essa porta.

2.  **Iniciar a Aplicação React:**

    - Abra um novo terminal (mantenha o terminal do `json-server` rodando).
    - Navegue até o diretório raiz do projeto (o mesmo do passo anterior).
    - Execute o seguinte comando para instalar as dependências do projeto:

      ```bash
      npm install
      ```

    - Após a instalação das dependências, execute o comando para iniciar a aplicação em modo de desenvolvimento:

      ```bash
      npm run dev
      ```

    - A aplicação será aberta automaticamente no seu navegador. Se não, procure no terminal a URL local (geralmente `http://localhost:5173` ou similar).

## Screenshots

[Espaço reservado para screenshots do projeto. Aqui você pode mostrar como a aplicação se parece, demonstrando a tabela de funcionários, a funcionalidade de pesquisa e a responsividade em diferentes dispositivos.]

- **Exemplo:**

  ![Tela Principal da Aplicação](link_para_sua_imagem_da_tela_principal.png)
  _Tela principal exibindo a lista de funcionários._

  ![Pesquisa por Nome](link_para_sua_imagem_da_pesquisa_por_nome.png)
  _Exemplo da pesquisa por nome._

  ![Versão Mobile](link_para_sua_imagem_da_versao_mobile.png)
  _Visualização da aplicação em um dispositivo móvel._

## Informações Adicionais

- **Tecnologias Utilizadas:** React, Typescript, Tailwind CSS (v4), json-server
- **Estrutura de Pastas:** [Você pode adicionar uma breve descrição da estrutura de pastas, se desejar.]
- **Contribuições:** [Se este projeto é open source ou permite contribuições, adicione informações sobre como contribuir.]
