import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css'],
})
export class ShowMessageComponent {
  days: number = 7;
  constructor() {}
}
