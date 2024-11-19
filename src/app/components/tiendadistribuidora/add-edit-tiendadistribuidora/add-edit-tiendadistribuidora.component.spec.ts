import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTiendadistribuidoraComponent } from './add-edit-tiendadistribuidora.component';

describe('AddEditTiendadistribuidoraComponent', () => {
  let component: AddEditTiendadistribuidoraComponent;
  let fixture: ComponentFixture<AddEditTiendadistribuidoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditTiendadistribuidoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTiendadistribuidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
