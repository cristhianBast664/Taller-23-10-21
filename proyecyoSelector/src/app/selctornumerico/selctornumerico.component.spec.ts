import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctornumericoComponent } from './selctornumerico.component';

describe('SelctornumericoComponent', () => {
  let component: SelctornumericoComponent;
  let fixture: ComponentFixture<SelctornumericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelctornumericoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelctornumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
