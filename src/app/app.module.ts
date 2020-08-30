import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavDrawerComponent } from './main/nav-drawer/nav-drawer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './main/home/home.component';
import { MatListModule } from '@angular/material/list';
import { RecentQuestionsComponent } from './recent-questions/recent-questions.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { SearchFormComponent } from './search-form/search-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { NotificationListPopupComponent } from './notification-list-popup/notification-list-popup.component';
import { UserMenuPopupComponent } from './user-menu-popup/user-menu-popup.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IconModule } from './shared/icon/icon.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { SideSheetComponent } from './main/side-sheet/side-sheet.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StickyDirective } from './top-bar/directives/sticky.directive';
import { HighlightSearchPipe } from './search-form/pipes/highlight-search.pipe';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MatRippleModule } from '@angular/material/core';
import { FishIconComponent } from './top-bar/fish-icon/fish-icon.component';
import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';
import { IsVisibleDirective } from './recent-questions/is-visible.directive';
import { MatInputModule } from '@angular/material/input';
import { FilterComponent } from './recent-questions/filter/filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeTr);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    NavDrawerComponent,
    HomeComponent,
    RecentQuestionsComponent,
    SearchFormComponent,
    NotificationListPopupComponent,
    UserMenuPopupComponent,
    SideSheetComponent,
    StickyDirective,
    HighlightSearchPipe,
    BottomBarComponent,
    FishIconComponent,
    IsVisibleDirective,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    OverlayModule,
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTooltipModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    IconModule,
    MatBadgeModule,
    MatMenuModule,
    MatRadioModule,
    MatSnackBarModule,
    MatRippleModule,
    MatInputModule,
    MatCheckboxModule,
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'tr-TR'},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
