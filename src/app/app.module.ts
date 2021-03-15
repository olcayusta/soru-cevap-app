import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopBarComponent } from './main/top-bar/top-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

import { registerLocaleData, ViewportScroller } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { SideSheetComponent } from './main/side-sheet/side-sheet.component';
import { MatRadioModule } from '@angular/material/radio';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { StickyDirective } from './main/top-bar/directives/sticky.directive';
import { BottomBarComponent } from '@components/bottom-bar/bottom-bar.component';
import { MatRippleModule } from '@angular/material/core';
import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';
import { SharedModule } from '@shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { NotificationButtonComponent } from './main/top-bar/components/notification-button/notification-button.component';
import { AvatarButtonComponent } from './main/top-bar/components/avatar-button/avatar-button.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SearchFormComponent } from './main/top-bar/components/search-form/search-form.component';

registerLocaleData(localeTr);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    SideSheetComponent,
    StickyDirective,
    BottomBarComponent,
    NotificationButtonComponent,
    AvatarButtonComponent,
    SettingsDialogComponent,
    SearchFormComponent,
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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    MatBadgeModule,
    MatMenuModule,
    MatRadioModule,
    MatSnackBarModule,
    MatRippleModule,
    SharedModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'tr-TR' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { horizontalPosition: 'center', duration: 4000 },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
