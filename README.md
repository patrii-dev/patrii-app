# Patrii App

## Lembrete: Configuração do Ambiente de Desenvolvimento

Por favor, certifique-se de configurar corretamente o seu ambiente de desenvolvimento para o React Native seguindo o guia oficial de [Configuração do Ambiente](https://reactnative.dev/docs/environment-setup?guide=native&package-manager=yarn).

Este guia abrange a instalação do JDK, configuração do Android Studio e outras etapas importantes para garantir uma configuração adequada do ambiente de desenvolvimento.

Não hesite em consultar este recurso sempre que precisar configurar ou atualizar o seu ambiente de trabalho para desenvolver aplicativos React Native.

## Tecnologias Utilizadas
- **Expo**: 50.0.17
- **React Native**: 0.73.6
- **react-native-svg**: 14.1.0
- **react-native-webview**: 13.6.4
- **styled-components**: 6.1.8
- **typescript**: 5.3.0
- **@react-native-community/netinfo**: 11.1.0

## Instalação e Uso
1. Certifique-se de ter o Node.js e o [Yarn](https://yarnpkg.com/)  instalados em seu computador.
2. Clone este repositório: `git clone git@github.com:patrii-dev/patrii-app.git`
3. Navegue até o diretório do projeto: `cd patrii-app`
4. Instale as dependências: `yarn install`
5. Inicie o aplicativo: `yarn ios / yarn android` *(Certifique de configurar o ambiente de desenvolvimento primeiro)

# Como fazer Build

Certifique-se de ter o [EAS CLI](https://expo.dev/eas) instalado em sua máquina. Você pode instalar o [EAS CLI](https://expo.dev/eas)  usando npm:
`npm install --global eas-cli`

#### Configuração do EAS
Após instalar o EAS CLI, você precisa configurar sua conta e projeto. Execute o seguinte comando no diretório do seu projeto React Native: `eas login`, após ira solicitar Email/username e senha do [Expo](https://expo.dev/) ( Diponíveis no DOC ).

#### Construção (Build) da Versão de Prévia (Preview)

Para construir uma versão de prévia do seu aplicativo, execute o seguinte comando:
`eas build --profile preview` ***(Nota: Essa versão não serve para produção, pois o APK fica grande entre outros fatores)***

#### Construção (Build) da Versão de Produção

Para construir uma versão de produção do seu aplicativo, execute o seguinte comando: `eas build` e escolha um das opções, Todos / Android / IOS, em seguida dará inicio ao build **.aab** que estará disponível para download no sistema do expo ( no próprio terminal conterá o link para o build ).
