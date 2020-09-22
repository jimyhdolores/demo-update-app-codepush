import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CodePush, InstallMode } from '@ionic-native/code-push/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private codePush: CodePush
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkCodePush();
    });
  }
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
}
