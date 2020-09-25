import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePaisesBanderaComponent } from './componente-paises-bandera.component';

describe('ComponentePaisesBanderaComponent', () => {
  let component: ComponentePaisesBanderaComponent;
  let fixture: ComponentFixture<ComponentePaisesBanderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePaisesBanderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePaisesBanderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
