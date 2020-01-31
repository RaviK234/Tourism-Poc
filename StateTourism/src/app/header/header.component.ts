import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockData } from '../Model/mockData.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data: MockData;
  state: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('Data From Another Component: ', this.data);
    this.activatedRoute.url.subscribe(params => {
      this.state = params[0].path;
      console.log('Active Routes: ', params[0].path);
    });
  }

}
