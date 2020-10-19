import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { SearchResultI, SearchService } from '@shared/services/search.service';
import { Question } from '@shared/models/question.model';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {
  myControl = new FormControl();
  filteredQuestions: Observable<SearchResultI[]>;

  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger }) autoComplete: MatAutocompleteTrigger;

  constructor(private searhService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.filteredQuestions = this.myControl.valueChanges.pipe(
      filter((value) => value.length > 0),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.searhService.searchQuestion(term))
    );
  }

  /*  displayFn(question: Question): string {
    return question && question ? question.title : null;
  }*/

  displayFn(value: any): string {
    return value.title || value.displayName || value.title;
  }

  selectedOption($event: MatAutocompleteSelectedEvent): void {
    const q = $event.option.value;
    this.router.navigateByUrl(`/question/${q.id}`);
  }

  closeAutocomplete() {
    this.autoComplete.closePanel();
  }
}
