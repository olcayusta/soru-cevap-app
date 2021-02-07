import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '@shared/services/answer.service';
import { StateService } from '@shared/services/state.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FavoriteService } from '../shared/services/favorite.service';
import { environment } from '../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent } from '../shared/components/share-dialog/share-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

interface ResolveData {
  title: string;
  question: Question;
}

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
    private title: Title
  ) {}

  ngOnInit(): void {
    this.question$ = this.route.data.pipe(
      // @ts-ignore
      map(({ question, title }: ResolveData) => {
        this.title.setTitle(`${question.title} - ${environment.appTitle}`);
        return question;
      })
    );
    this.stateService.hide();
  }

  addToFavorite(questionId: number): void {
    this.favoriteService.addToFavorite(questionId).subscribe((value) => {
      console.log(value);
    });
  }

  /*
   * Open share dialog
   * */
  openDialog() {
    const dialog = this.dialog.open(ShareDialogComponent, {
      autoFocus: false,
      minWidth: 512,
    });
    dialog.afterClosed().subscribe((value) => {
      console.log(value);
      this.snackBar.open('Bağlantı panoya kopyalandı');
    });
  }
}
