import { Component, OnInit } from '@angular/core';
import { MockData } from '../Model/mockData.model';

@Component({
  selector: 'app-rajasthantourism',
  templateUrl: './rajasthantourism.component.html',
  styleUrls: ['./rajasthantourism.component.scss']
})
export class RajasthantourismComponent implements OnInit {

  data: MockData = {
    state: 'Rajasthan',
    tagLine: 'The Incredible State of India',
    imgSrc: 'http://www.jaipurbynite.com/img/new/logo1.png',
  };

  constructor() { }

  ngOnInit() {
  }

}
