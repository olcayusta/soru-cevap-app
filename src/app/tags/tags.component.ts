import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '../shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'qa-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent implements OnInit {
  tags: Tag[];

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.tags = this.route.snapshot.data.tags;
  }

}
