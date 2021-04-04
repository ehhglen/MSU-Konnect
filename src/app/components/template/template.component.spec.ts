import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TemplateComponent } from './template.component';
import {HttpClientModule} from '@angular/common/http';


describe('TemplateComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TemplateComponent]
  }));
  it('should be created', () => {
    const service: TemplateComponent = TestBed.inject(TemplateComponent);
    expect(TemplateComponent).toBeTruthy();
  });
  
  // it('should create modal or form!!', () => {
    
  // })

});
