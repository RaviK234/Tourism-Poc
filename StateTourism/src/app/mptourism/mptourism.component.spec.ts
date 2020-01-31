import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MptourismComponent } from './mptourism.component';

describe('MptourismComponent', () => {
  let component: MptourismComponent;
  let fixture: ComponentFixture<MptourismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MptourismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MptourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
