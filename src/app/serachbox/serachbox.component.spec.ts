import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachboxComponent } from './serachbox.component';

describe('SerachboxComponent', () => {
  let component: SerachboxComponent;
  let fixture: ComponentFixture<SerachboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
