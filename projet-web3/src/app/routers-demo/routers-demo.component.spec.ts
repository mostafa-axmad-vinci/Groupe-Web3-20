import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutersDemoComponent } from './routers-demo.component';

describe('RoutersDemoComponent', () => {
  let component: RoutersDemoComponent;
  let fixture: ComponentFixture<RoutersDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutersDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutersDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
