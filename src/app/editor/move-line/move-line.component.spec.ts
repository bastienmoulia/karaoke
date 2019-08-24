import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveLineComponent } from './move-line.component';

describe('MoveLineComponent', () => {
  let component: MoveLineComponent;
  let fixture: ComponentFixture<MoveLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
