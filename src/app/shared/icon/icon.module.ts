import {NgModule} from '@angular/core';
import {NotificationsIconComponent} from './notifications-icon/notifications-icon.component';
import {MenuIconComponent} from './menu-icon/menu-icon.component';
import {ChatIconComponent} from './chat-icon/chat-icon.component';
import {HomeIconComponent} from './home-icon/home-icon.component';
import {CreateIconComponent} from './create-icon/create-icon.component';
import {SettingsIconComponent} from './settings-icon/settings-icon.component';
import {HelpIconComponent} from './help-icon/help-icon.component';
import {FeedbackIconComponent} from './feedback-icon/feedback-icon.component';
import {QuestionAnswerIconComponent} from './question-answer-icon/question-answer-icon.component';
import {ExitToAppIconComponent} from './exit-to-app-icon/exit-to-app-icon.component';
import {SearchIconComponent} from './search-icon/search-icon.component';
import {MoreVertIconComponent} from './more-vert-icon/more-vert-icon.component';
import {VisibilityIconComponent} from './visibility-icon/visibility-icon.component';
import {VisibilityOffIconComponent} from './visibility-off-icon/visibility-off-icon.component';
import {FormatBoldIconComponent} from './format-bold-icon/format-bold-icon.component';
import {CancelIconComponent} from './cancel-icon/cancel-icon.component';
import { AddIconComponent } from './add-icon/add-icon.component';
import { RateReviewIconComponent } from './rate-review-icon/rate-review-icon.component';
import { FilterListIconComponent } from './filter-list-icon/filter-list-icon.component';
import { ContentCopyIconComponent } from './content-copy-icon/content-copy-icon.component';

@NgModule({
  declarations: [
    NotificationsIconComponent,
    MenuIconComponent,
    ChatIconComponent,
    HomeIconComponent,
    CreateIconComponent,
    SettingsIconComponent,
    HelpIconComponent,
    FeedbackIconComponent,
    QuestionAnswerIconComponent,
    ExitToAppIconComponent,
    SearchIconComponent,
    MoreVertIconComponent,
    VisibilityIconComponent,
    VisibilityOffIconComponent,
    FormatBoldIconComponent,
    CancelIconComponent,
    AddIconComponent,
    RateReviewIconComponent,
    FilterListIconComponent,
    ContentCopyIconComponent
  ],
  exports: [
    NotificationsIconComponent,
    ChatIconComponent,
    HomeIconComponent,
    MenuIconComponent,
    CreateIconComponent,
    SettingsIconComponent,
    HelpIconComponent,
    FeedbackIconComponent,
    QuestionAnswerIconComponent,
    ExitToAppIconComponent,
    SearchIconComponent,
    MoreVertIconComponent,
    VisibilityIconComponent,
    VisibilityOffIconComponent,
    CancelIconComponent,
    AddIconComponent,
    RateReviewIconComponent,
    FilterListIconComponent,
    ContentCopyIconComponent
  ]
})
export class IconModule {
}
