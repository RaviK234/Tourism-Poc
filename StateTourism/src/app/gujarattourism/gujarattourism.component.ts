import { Component, OnInit } from '@angular/core';
import { MockData } from '../Model/mockData.model';

@Component({
  selector: 'app-gujarattourism',
  templateUrl: './gujarattourism.component.html',
  styleUrls: ['./gujarattourism.component.scss']
})
export class GujarattourismComponent implements OnInit {

  data: MockData = {
    state: 'Gujarat',
    tagLine: 'Vibrant Gujarat',
    imgSrc: 'https://seeklogo.com/images/G/gujarat-tourism-logo-FAAFFB32AE-seeklogo.com.png',
  };

  constructor() { }

  ngOnInit() {
  }

}
