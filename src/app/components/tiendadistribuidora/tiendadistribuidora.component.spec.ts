import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendadistribuidoraComponent } from './tiendadistribuidora.component';

describe('TiendadistribuidoraComponent', () => {
  let component: TiendadistribuidoraComponent;
  let fixture: ComponentFixture<TiendadistribuidoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendadistribuidoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendadistribuidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
