import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../environments/environment';
import {StateService} from '../shared/services/state.service';
import { TagService } from '../shared/services/tag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private stateService: StateService,
    private tagService: TagService
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle(`${environment.appTitle}`);
    this.stateService.show();
   /* this.tagService.getFavoriteTags().subscribe(value2 => {
      localStorage.setItem('watchedTags', JSON.stringify(value2));
    });*/
  }

}
