import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonFooter, IonToolbar, IonButton, IonText, IonicSlides } from "@ionic/angular/standalone";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonToolbar, IonFooter, IonContent, RouterLink,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePage implements OnInit {

  public onboardingScreens = [
    {image: '1.jpg'},
    {image: '2.jpg'},
    {image: '3.jpg'},
  ];
  public swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {
  }

}
