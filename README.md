
![Code Push FuckynCode](https://github.com/jimyhdolores/demo-update-app-codepush/blob/master/code_push_ionic.jpg)
# demo-update-app-codepush
Hola Chikis, en esta ocación veremos como actualizar una aplicación hecha en Ionic 5 y Cordova usando CodePush de Appcenter;

"Visual Studio App Center le permite automatizar y administrar el ciclo de vida de sus aplicaciones de iOS, Android, Windows y macOS. Envíe aplicaciones con más frecuencia, con una calidad superior y con más confianza. Conecte su repositorio y, en cuestión de minutos, automatice sus compilaciones, realice pruebas en dispositivos reales en la nube, distribuya aplicaciones a evaluadores de beta y supervise el uso real con datos de bloqueos y análisis. Todo en un mismo lugar."

Más información en https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli

# Pasos

Primero tenemos que configurar nuestra maquina con lo siguiente:

### Instalar la CLI de App Center
npm install -g appcenter-cli

### Instalar  Cordova
npm install -g cordova

### Native run
npm i -g native-run

### GRADLE_HOME
 Asegurensense de tener Gradle en el path de su S.O 
 https://gradle.org/releases/

### Registrarse en AppCenter
Debemos registrarnos y crear nuestra aplicacion en App Center
https://appcenter.ms/sign-in

### Configurar config.xml
Agregar APP_SECRET, CodePushDeploymentKey y access origin dentro de nuestro proyecto Ionic

### Agregar los complementos para CodePush
cordova plugin add cordova-plugin-code-push@latest
npm install @ionic-native/code-push

### Crear metodo para verificar e instalar las actualizaciones
Importaremos el modulo de CodePush en el appModule

```javascript
import {CodePush } from '@ionic-native/code-push/ngx'
```


**Metodo para verificar e instalar la actualización:**
```javascript
 checkCodePush() {
    this.codePush
      .sync(
        {
          updateDialog: {
            updateTitle:"Nueva Actualización",
            mandatoryUpdateMessage: "Existe una nueva actualización",
            optionalUpdateMessage:"Hay una nueva versión, deseas instalarlo?",
            optionalInstallButtonLabel :"Instalar",
            optionalIgnoreButtonLabel :"Ignorar"
          },
          installMode: InstallMode.IMMEDIATE,
        }
      )
      .subscribe(
        (data) => {
          console.log("data:: ", data);
        },
        (error) => {
          console.log("error:: ", error);
        }
      );
  }
```


### Login en appcenter desde nuestra aplicación
appcenter login

### Compilar el proyecto (en esta demo es para Android)
ionic cordova prepare android

### Publicar un release

appcenter codepush release-cordova -a < ownerName >/< appName >

Si te gusta el video suscríbete, dale Like y comparte, asi me estas ayudando a generar más contenido, gracias.
😎Actualizar aplicación Ionic 5 + CodePush📲 https://youtu.be/0OpfSvXTqNs
