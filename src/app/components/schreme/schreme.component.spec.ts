import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchremeComponent } from './schreme.component';

describe('SchremeComponent', () => {
  let component: SchremeComponent;
  let fixture: ComponentFixture<SchremeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchremeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
