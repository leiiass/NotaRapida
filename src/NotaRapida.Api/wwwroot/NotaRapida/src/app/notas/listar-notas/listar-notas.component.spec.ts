import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNotasComponent } from './listar-notas.component';

describe('ListarNotasComponent', () => {
  let component: ListarNotasComponent;
  let fixture: ComponentFixture<ListarNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarNotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
