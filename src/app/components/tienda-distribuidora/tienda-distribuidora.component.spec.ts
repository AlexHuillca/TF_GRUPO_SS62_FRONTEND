import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaDistribuidoraComponent } from './tienda-distribuidora.component';

describe('TiendaDistribuidoraComponent', () => {
  let component: TiendaDistribuidoraComponent;
  let fixture: ComponentFixture<TiendaDistribuidoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaDistribuidoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaDistribuidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
