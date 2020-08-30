import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '../shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'qa-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {
  tag: Tag;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tag = this.route.snapshot.data.tag;
  }

}
