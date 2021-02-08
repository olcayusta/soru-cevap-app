import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

interface ITagsResolveData {
  tags: Tag[];
}

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent implements OnInit {
  tags!: Tag[];

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    const { tags } = <ITagsResolveData>this.route.snapshot.data;
    this.tags = tags;
    this.titleService.setTitle(`Etiketler - ${environment.appTitle}`);
  }
}
