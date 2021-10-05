import { RememberMeComponent } from './remember-me/remember-me.component';
import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
})
export class ContentProjectionComponent implements AfterContentInit {
  @ContentChild(RememberMeComponent) remember: RememberMeComponent;
  showMessage: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }
}
