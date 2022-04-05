import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPrincipalComponent } from './tareas-principal.component';

describe('TareasPrincipalComponent', () => {
  let component: TareasPrincipalComponent;
  let fixture: ComponentFixture<TareasPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
