import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTiendadistribuidoraComponent } from './list-tiendadistribuidora.component';

describe('ListTiendadistribuidoraComponent', () => {
  let component: ListTiendadistribuidoraComponent;
  let fixture: ComponentFixture<ListTiendadistribuidoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTiendadistribuidoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTiendadistribuidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
