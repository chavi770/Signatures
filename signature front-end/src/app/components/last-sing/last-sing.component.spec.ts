import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSingComponent } from './last-sing.component';

describe('LastSingComponent', () => {
  let component: LastSingComponent;
  let fixture: ComponentFixture<LastSingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastSingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
