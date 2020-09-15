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
import { HomeComponent } from './main/home/home.component';
import { RecentQuestionsComponent } from './recent-questions/recent-questions.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StickyDirective } from './top-bar/directives/sticky.directive';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MatRippleModule } from '@angular/material/core';
import { FishIconComponent } from './top-bar/fish-icon/fish-icon.component';
import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';
import { IsVisibleDirective } from './recent-questions/is-visible.directive';
import { MatInputModule } from '@angular/material/input';
import { FilterComponent } from './recent-questions/filter/filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from '@shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NotificationListPopupComponent } from './notification-list-popup/notification-list-popup.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavDrawerComponent } from './main/nav-drawer/nav-drawer.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarProfileComponent } from './top-bar-profile/top-bar-profile.component';

registerLocaleData(localeTr);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    HomeComponent,
    RecentQuestionsComponent,
    SideSheetComponent,
    StickyDirective,
    BottomBarComponent,
    FishIconComponent,
    IsVisibleDirective,
    FilterComponent,
    NotificationListPopupComponent,
    NavDrawerComponent,
    SearchFormComponent,
    TopBarProfileComponent
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
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    IconModule,
    MatBadgeModule,
    MatMenuModule,
    MatRadioModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'tr-TR'},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
