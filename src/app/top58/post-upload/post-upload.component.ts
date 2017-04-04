import {Component, Input, OnInit} from '@angular/core';
declare var sysinfo;
@Component({
  selector: 'meepo-post-upload',
  templateUrl: './post-upload.component.html',
  styleUrls: ['./post-upload.component.css']
})
export class PostUploadComponent implements OnInit {
  @Input() items: string[];
  @Input() uploadUrl: string;

  constructor() {

  }

  ngOnInit() {
    this.items = this.items || [];
    this.uploadUrl = this.uploadUrl || sysinfo.uploadUrl;
  }

}
