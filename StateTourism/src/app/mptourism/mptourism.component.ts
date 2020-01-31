import { Component, OnInit } from '@angular/core';
import { MockData } from '../Model/mockData.model';

@Component({
  selector: 'app-mptourism',
  templateUrl: './mptourism.component.html',
  styleUrls: ['./mptourism.component.scss']
})
export class MptourismComponent implements OnInit {

  data: MockData = {
    state: 'Madhya Pradesh',
    tagLine: 'The Heart of Incredible India',
    imgSrc: 'https://swikblog.com/wp-content/uploads/2018/02/madhya-pradesh-tourism.jpg',
  };

  constructor() { }

  ngOnInit() {
  }

}
