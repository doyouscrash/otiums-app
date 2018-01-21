import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

skipMsg: string = "Omitir";

  slides:any[] = [
    {
      title: "Bienvenido a Otiums!",
      description: "Sigue el asistente y conoce que puedes hacer con <b>Otiums</b>!",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "¿Qué es Otiums?",
      description: "<b>Otiums</b> te ayudará a encontrar las mejores ofertas y descuentos cerca de ti.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "¿Que hace esta app?",
      description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];

  constructor(public navCtrl: NavController) {
  }

  skip_intro () {
    this.navCtrl.setRoot(HomePage);
  }

}
