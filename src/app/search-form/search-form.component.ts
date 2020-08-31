import {Component, OnInit, ChangeDetectionStrategy, NgModule} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { SearchService } from '../shared/services/search.service';
import { Question } from '../shared/models/question.model';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Router, RouterModule} from '@angular/router';
import {IconModule} from '../shared/icon/icon.module';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {HighlightSearchPipe} from './pipes/highlight-search.pipe';

@Component({
  selector: 'qa-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {
  myControl = new FormControl();

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  filteredQuestions: Observable<Question[]>;

  constructor(
    private searhService: SearchService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.filteredQuestions = this.myControl.valueChanges.pipe(
      filter(value => value.length > 0),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term: string) => this.searhService.searchQuestion(term))
    );

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  selectedOption($event: MatAutocompleteSelectedEvent): void {
    const q = $event.option.value;
    this.router.navigateByUrl(`/questions/${q.id}`);
  }
}

@NgModule({
  declarations: [
    SearchFormComponent,
    HighlightSearchPipe
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    IconModule,
    MatButtonModule,
    RouterModule,
    SharedModule
  ]
})
class SearchFormModule {}
