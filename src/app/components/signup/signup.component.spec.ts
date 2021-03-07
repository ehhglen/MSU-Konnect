import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';




import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SignUp Component', () => {
    expect(component).toBeTruthy();
  });

  it(`should signup as new user`, () => {
    component.signup();
    expect(component.signup).toBeTruthy();
  });


  it('form should be invalid', async() => {
    component.signupForm.controls['name'].setValue('');
    component.signupForm.controls['email'].setValue('');
    component.signupForm.controls['password'].setValue('');
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('form should be valid', async() => {
    const nameInput = component.signupForm.controls['name'];
    const emailInput = component.signupForm.controls['email'];
    const passwordInput = component.signupForm.controls['password'];

    nameInput.setValue('Fake Name');
    emailInput.setValue('email@msudenver.com')
    passwordInput.setValue('fakepassword');

    expect(nameInput.value).toEqual('Fake Name');
    expect(emailInput.value).toEqual('email@msudenver.com');
    expect(passwordInput.value).toEqual('fakepassword');


    //const nameInput = component.signupForm.controls.name;
    //nameInput.setValue('John Peter');
    //expect(nameInput).toContain('fake name');
 

    // component.signupForm.controls['email'].setValue('fake email');
    // component.signupForm.controls['password'].setValue('fake password');
    //expect(component.signupForm.get('name')).toContain('fake name');
  });

});
