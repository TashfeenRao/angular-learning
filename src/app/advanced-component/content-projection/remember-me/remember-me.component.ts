import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remember-me',
  templateUrl: './remember-me.component.html',
  styleUrls: ['./remember-me.component.css'],
})
export class RememberMeComponent implements OnInit {
  @Output() checked: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onChecked(event: any) {
    this.checked.emit(event.target.checked);
  }
}
