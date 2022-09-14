import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqareComponent } from './sqare.component';

describe('SqareComponent', () => {
  let component: SqareComponent;
  let fixture: ComponentFixture<SqareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
