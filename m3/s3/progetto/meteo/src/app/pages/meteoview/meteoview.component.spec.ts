import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoviewComponent } from './meteoview.component';

describe('MeteoviewComponent', () => {
  let component: MeteoviewComponent;
  let fixture: ComponentFixture<MeteoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeteoviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeteoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
