import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordcheckComponent } from './passwordcheck.component';

describe('PasswordcheckComponent', () => {
  let component: PasswordcheckComponent;
  let fixture: ComponentFixture<PasswordcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
