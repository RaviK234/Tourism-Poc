import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajasthantourismComponent } from './rajasthantourism.component';

describe('RajasthantourismComponent', () => {
  let component: RajasthantourismComponent;
  let fixture: ComponentFixture<RajasthantourismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajasthantourismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajasthantourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
