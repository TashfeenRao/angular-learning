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
  ViewChildren,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
})
export class ContentProjectionComponent implements AfterContentInit {
  @ViewChildren(ShowMessageComponent) message: QueryList<ShowMessageComponent>;
  @ViewChild('email') emailRef: ElementRef;
  @ContentChildren(RememberMeComponent)
  remember: QueryList<RememberMeComponent>;
  showMessage: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.message) {
      console.log(this.emailRef);
      this.message.forEach((item) => {
        // setTimeout(() => {
        //   item.days = 30;
        // }); this is hacky for mutating the view child input and avoiding the error because view has already displayed any futture change with cause and development error
        item.days = 30;
        this.cd.detectChanges();
        // this checks for change after view init if found then re render's the component
      });
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
