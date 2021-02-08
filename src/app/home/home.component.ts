import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.show();
    this.titleService.setTitle(`${environment.appTitle}`);
  }
}
