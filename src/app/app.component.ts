import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { MatDialog } from '@angular/material/dialog';
import { UiCommonFailureMessageComponent } from './shared/components/ui-common-failure-message/ui-common-failure-message.component';

enum SideMenuStateName {
  arrowLeft = 'keyboard_double_arrow_left',
  arrowRight = 'keyboard_double_arrow_right',
}

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  public isExpanded = true;
  public text = "";
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  public get getSideMenuIconName(): string {
    return this.isExpanded ? SideMenuStateName.arrowLeft : SideMenuStateName.arrowRight;
  }

  public toggleSideMenu() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private observer: BreakpointObserver, public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  public refresh(): void {

  }

  showText(): void {
    //console.log(this.wrapComponentName(this.text));
  }
}
