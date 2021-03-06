import {
  Component,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  ɵmarkDirty as markDirty,
  Type,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Compiler,
} from '@angular/core';
import { User } from '@shared/models/user.model';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import { StateService } from '@shared/services/state.service';
import { NotificationService } from '@shared/services/notification.service';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { SpinnerService } from '@shared/services/spinner.service';
import { SearchFormComponent } from './components/search-form/search-form.component';

@Component({
  selector: 'qa-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
  @Output() openDrawer = new EventEmitter();
  @Output() openSheet = new EventEmitter();

  isLoggedIn$!: Observable<boolean>;
  user!: User;

  // any
  topbarOpened: any;

  isHandset!: boolean;

  spinner$!: Observable<boolean>;

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    private authService: AuthService,
    private stateService: StateService,
    private notificationService: NotificationService,
    private breakpointObserver: BreakpointObserver,
    private spinnerService: SpinnerService
  ) {}

  async ngOnInit(): Promise<void> {
    this.spinner$ = this.spinnerService.subject$;
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .subscribe((value: BreakpointState) => {
        this.isHandset = value.matches;

        // Mobile phone
        if (value.matches) {
          this.stateService.subject.subscribe((state) => {
            this.topbarOpened = state;
            console.log(state);
            markDirty(this);
          });
        }

        markDirty(this);
      });

    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
}
