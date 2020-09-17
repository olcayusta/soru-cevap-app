import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tag = this.route.snapshot.data.tag;
      markDirty(this);
    });
  }

}
