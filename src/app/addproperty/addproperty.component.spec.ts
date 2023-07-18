import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppropertyComponent } from './addproperty.component';

describe('ApppropertyComponent', () => {
  let component: ApppropertyComponent;
  let fixture: ComponentFixture<ApppropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApppropertyComponent]
    });
    fixture = TestBed.createComponent(ApppropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
