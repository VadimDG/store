import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierSelectComponent } from './suplier-select.component';

describe('SuplierSelectComponent', () => {
  let component: SuplierSelectComponent;
  let fixture: ComponentFixture<SuplierSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplierSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplierSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
