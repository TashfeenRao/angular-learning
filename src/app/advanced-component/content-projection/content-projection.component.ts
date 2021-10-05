import { RememberMeComponent } from './remember-me/remember-me.component';
import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
})
export class ContentProjectionComponent implements AfterContentInit {
  @ContentChildren(RememberMeComponent)
  remember: QueryList<RememberMeComponent>;
  showMessage: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => {
          this.showMessage = checked;
        });
      });
    }
  }
}
