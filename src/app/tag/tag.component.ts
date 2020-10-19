import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ResolveData {
  tag: Tag;
}

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {
  tag$: Observable<Tag>;

  constructor(private route: ActivatedRoute) {}

  /**
   * snapshot ozelligini kullanamiyoruz.
   * cunku bir tag sayfasindan, baska bir tag sayfasina gecis yapmamiz gerekli
   */
  ngOnInit(): void {
    this.tag$ = this.route.data.pipe(
      map(({ tag }: ResolveData) => {
        return tag;
      })
    );
  }
}
