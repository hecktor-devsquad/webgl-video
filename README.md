# WebGL Video Project

Este projeto foi criado para demonstrar um problema relacionado ao uso de raycasting e grupos no contexto de WebGL. Ele serve como um exemplo prático para investigar e solucionar questões específicas envolvendo essas funcionalidades.

## Tecnologias e Frameworks Utilizados

- **Three.js**: Biblioteca JavaScript para renderização 3D baseada em WebGL.
- **JavaScript**: Linguagem principal utilizada no desenvolvimento do projeto.
- **Node.js**: Ambiente de execução para gerenciar dependências e scripts.
- **Yarn**: Gerenciador de pacotes para instalar e executar dependências do projeto.

## Como Iniciar

1. **Clone o repositório**:
    ```bash
    git clone [https://github.com/hecktor-devsquad/webgl-video.git](https://github.com/hecktor-devsquad/webgl-video.git)
    cd webgl-video
    ```

2. **Instale as dependências**:
    Certifique-se de ter o Node.js instalado e execute:
    ```bash
    yarn install
    ```

3. **Inicie o servidor de desenvolvimento**:
    ```bash
    yarn dev
    ```

4. **Acesse o projeto no navegador**:
    Abra `http://localhost:5173` (ou a porta configurada) para visualizar o projeto.

## Estrutura do Projeto

- `src/`: Contém o código-fonte principal.
- `public/`: Arquivos estáticos e assets.
- `package.json`: Configurações e dependências do projeto.

## Problema Demonstrado

O projeto foca em um problema específico envolvendo:
- **Raycasting**: Técnica para detectar interseções entre um raio e objetos 3D.
- **Grupos**: Organização de objetos em hierarquias para manipulação conjunta.

O comportamento inesperado ocorre ao combinar essas duas funcionalidades, e este projeto serve como base para análise e depuração.

## Screenshot

Abaixo está uma captura de tela do projeto em execução:

![Screenshot do Projeto](https://github.com/hecktor-devsquad/webgl-video/blob/main/src/assets/screenshot.png?raw=true)
