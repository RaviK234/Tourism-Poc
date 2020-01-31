import { Component, OnInit } from '@angular/core';
import { MockData } from '../Model/mockData.model';

@Component({
  selector: 'app-uttarakhandtourism',
  templateUrl: './uttarakhandtourism.component.html',
  styleUrls: ['./uttarakhandtourism.component.scss']
})
export class UttarakhandtourismComponent implements OnInit {

  data: MockData = {
    state: 'Uttarakhand',
    tagLine: 'Exploring Uttarakhand',
    imgSrc: 'https://image.slidesharecdn.com/uttrakhandppt-140602234246-phpapp01/95/uttrakhand-ppt-1-638.jpg?cb=1401752642',
  };

  constructor() { }

  ngOnInit() {
  }

}
