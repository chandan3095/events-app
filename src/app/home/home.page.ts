import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonIcon, IonText, IonFab, IonFabButton, IonBadge, IonRow, IonCol, IonSearchbar, IonicSlides, IonList, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardOutline, locateOutline, locationOutline, notificationsOutline, optionsOutline } from 'ionicons/icons';
import { Event } from '../interfaces/event.interface';
import { Category } from '../interfaces/catagory.interface';
import { events } from '../data/events';
import { CommonModule, DatePipe } from '@angular/common';
import { categories } from '../data/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonList,
    IonSearchbar,
    IonCol,
    IonRow,
    IonBadge,
    IonFabButton,
    IonFab,
    IonText,
    IonIcon,
    IonLabel,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    DatePipe,
    RouterLink,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  public upcomingEvents: Event[] = [];
  public currentEvents: Event[] = [];
  public categories: Category[] = [];
  public swiperModules = [IonicSlides];

  constructor() {
    addIcons({ locateOutline, notificationsOutline, optionsOutline, locationOutline, arrowForwardOutline });
  }

  ngOnInit(): void {
    this.currentEvents = [...events];
    this.upcomingEvents = events.sort((a, b) => {
      const idA = parseInt(a.id, 10);
      const idB = parseInt(b.id, 10);
      return idB - idA;
    });
    this.categories = [...categories];
  }
}
