import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

interface ITagResolveData {
  tag: Tag;
}

type RouteData = {
  tag: Tag;
};

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent implements OnInit {
  tag$!: Observable<Tag>;

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  /**
   * snapshot ozelligini kullanamiyoruz.
   * cunku bir tag sayfasindan, baska bir tag sayfasina gecis yapmamiz gerekli
   */
  ngOnInit(): void {
    /**
     * Kullanici, tag.component.ts sayfasindan baska bir tag.component.ts sayfasina gidebilir.
     * Bu yuzden, dinamik olarak cekmeliyiz.
     */
    this.tag$ = this.route.data.pipe(
      // @ts-ignore
      map(({ tag }: RouteData) => {
        return tag;
      })
    );
    this.titleService.setTitle(`Kullanıcılar - ${environment.appTitle}`);
  }
}
