import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServiceComponent } from './show-service.component';

describe('ShowServiceComponent', () => {
  let component: ShowServiceComponent;
  let fixture: ComponentFixture<ShowServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
