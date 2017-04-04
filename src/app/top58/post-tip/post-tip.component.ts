import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'meepo-post-tip',
  templateUrl: './post-tip.component.html',
  styleUrls: ['./post-tip.component.css']
})
export class PostTipComponent implements OnInit {
  @Input() tips: string;
  constructor() { }

  ngOnInit() {
  }

}
