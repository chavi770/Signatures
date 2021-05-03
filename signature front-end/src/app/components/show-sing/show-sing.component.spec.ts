import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingComponent } from './show-sing.component';

describe('ShowSingComponent', () => {
  let component: ShowSingComponent;
  let fixture: ComponentFixture<ShowSingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
