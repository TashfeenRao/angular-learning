import { ShowMessageComponent } from './show-message/show-message.component';
import { RememberMeComponent } from './remember-me/remember-me.component';
import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
})
export class ContentProjectionComponent implements AfterContentInit {
  @ViewChild(ShowMessageComponent) message: ShowMessageComponent;
  @ContentChildren(RememberMeComponent)
  remember: QueryList<RememberMeComponent>;
  showMessage: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.message) {
      console.log(this.message.days);
      console.log(this.message.testFunc());
    }
  }

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
