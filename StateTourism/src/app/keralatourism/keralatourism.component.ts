import { Component, OnInit } from '@angular/core';
import { MockData } from '../Model/mockData.model';

@Component({
  selector: 'app-keralatourism',
  templateUrl: './keralatourism.component.html',
  styleUrls: ['./keralatourism.component.scss']
})
export class KeralatourismComponent implements OnInit {

  data: MockData = {
    state: 'Kerala',
    tagLine: 'God’s Own Country',
    imgSrc: 'https://mayastickers.com/image/cache/catalog/mainimage/kkk/kerala_tourism_logo-200x200.jpg',
  };

  constructor() { }

  ngOnInit() {
  }

}
