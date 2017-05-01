import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Post } from '../../models/post.model';
import { SchemeStringsService } from '../../services/scheme-strings.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  actionLine: string;

  constructor(private strings: SchemeStringsService) { }

  ngOnInit() {
    this.actionLine = this.strings.getSchemeString();
  }

}
