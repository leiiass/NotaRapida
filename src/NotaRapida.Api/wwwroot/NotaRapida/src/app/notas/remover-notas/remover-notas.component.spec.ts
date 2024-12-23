import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverNotasComponent } from './remover-notas.component';

describe('RemoverNotasComponent', () => {
  let component: RemoverNotasComponent;
  let fixture: ComponentFixture<RemoverNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoverNotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoverNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
