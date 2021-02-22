import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '@shared/services/answer.service';
import { StateService } from '@shared/services/state.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FavoriteService } from '../shared/services/favorite.service';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent } from '../shared/components/share-dialog/share-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
  question$!: Observable<Question>;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private stateService: StateService,
    private favoriteService: FavoriteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.question$ = this.route.data.pipe(
      map((data) => {
        const { question } = <{ question: Question }>data;
        this.updateTitle(question.title);
        return question;
      })
    );

    this.stateService.hide();
  }

  updateTitle(questionTitle: string) {
    this.titleService.setTitle(`${questionTitle} - ${environment.appTitle}`);
  }

  addToFavorite(questionId: number): void {
    this.favoriteService.addToFavorite(questionId).subscribe((value) => {
      console.log(value);
    });
  }

  /*
   * Open Share Dialog
   * */
  openDialog() {
    const dialog = this.dialog.open(ShareDialogComponent, {
      autoFocus: false,
      minWidth: 512,
    });
    dialog.afterClosed().subscribe((value) => {
      if (value) {
        this.snackBar.open('Bağlantı panoya kopyalandı');
      }
    });
  }
}
