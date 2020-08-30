import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ɵmarkDirty as markDirty } from '@angular/core';
import { QuestionService } from '../shared/services/question.service';
import { Question } from '../shared/models/question.model';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'qa-recent-questions',
  templateUrl: './recent-questions.component.html',
  styleUrls: ['./recent-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentQuestionsComponent implements OnInit, AfterViewInit {
  questions: Question[];

  offset = 0;

  chips = [
    'Tümü',
    'En güncel',
    'Bugün',
    'Cevaplanmamış',
    'Doğru cevap almamış',
    'İlginç',
    'Yayınlar'
  ];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  constructor(
    private questionService: QuestionService
  ) {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe(value => {
      this.questions = value;
      markDirty(this);
    });
  }

  ngAfterViewInit(): void {
  }

  loadMore(): void {
    console.log('load more is detect!');
    this.questionService.getMoreQuestions(this.offset).subscribe(value => {
      if (value) {
        this.offset += 6;
        this.questions = [...this.questions, ...value];
        markDirty(this);
      }
    });
  }
}
