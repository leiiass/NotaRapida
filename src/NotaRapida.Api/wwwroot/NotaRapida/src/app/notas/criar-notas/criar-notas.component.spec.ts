import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarNotasComponent } from './criar-notas.component';

describe('CriarNotasComponent', () => {
  let component: CriarNotasComponent;
  let fixture: ComponentFixture<CriarNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarNotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
