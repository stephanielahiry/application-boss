import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxInputComponent } from './textbox-input.component';

describe('TextboxInputComponent', () => {
  let component: TextboxInputComponent;
  let fixture: ComponentFixture<TextboxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextboxInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextboxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
