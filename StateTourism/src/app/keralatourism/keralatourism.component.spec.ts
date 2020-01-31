import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeralatourismComponent } from './keralatourism.component';

describe('KeralatourismComponent', () => {
  let component: KeralatourismComponent;
  let fixture: ComponentFixture<KeralatourismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeralatourismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeralatourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
