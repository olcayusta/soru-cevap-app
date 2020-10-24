import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import { IconModule } from '@shared/icon/icon.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { SideSheetComponent } from './main/side-sheet/side-sheet.component';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { StickyDirective } from './top-bar/directives/sticky.directive';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MatRippleModule } from '@angular/material/core';
import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NotificationListPopupComponent } from './top-bar/components/notification-list-popup/notification-list-popup.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavDrawerComponent } from './main/nav-drawer/nav-drawer.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserMenuPopupComponent } from './top-bar/components/user-menu-popup/user-menu-popup.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { ImgShadowComponent } from './top-bar/components/avatar-button/img-shadow/img-shadow.component';
import { NotificationButtonComponent } from './top-bar/components/notification-button/notification-button.component';
import { AvatarButtonComponent } from './top-bar/components/avatar-button/avatar-button.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MobileAppInfoComponent } from './mobile-app-info/mobile-app-info.component';

registerLocaleData(localeTr);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    SideSheetComponent,
    StickyDirective,
    BottomBarComponent,
    NotificationListPopupComponent,
    NavDrawerComponent,
    SearchFormComponent,
    UserMenuPopupComponent,
    ImgShadowComponent,
    NotificationButtonComponent,
    AvatarButtonComponent,
    SettingsDialogComponent,
    MobileAppInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    OverlayModule,
    MatProgressBarModule,
    MatTooltipModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    IconModule,
    MatBadgeModule,
    MatMenuModule,
    MatRadioModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatInputModule,
    MatListModule,
    SharedModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'tr-TR' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { horizontalPosition: 'start', duration: 4000 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
