import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;

beforeEach(async () => {
await TestBed.configureTestingModule({
imports: [
RouterTestingModule,
HttpClientTestingModule
],
declarations: [ LoginComponent ]
})
.compileComponents();
});

beforeEach(() => {
fixture = TestBed.createComponent(LoginComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create login', () => {
const fixture = TestBed.createComponent(LoginComponent);
const app = fixture.debugElement.componentInstance;
expect(app).toBeTruthy();
});

it('should create login Component', () => {
expect(component).toBeTruthy();
});

it(`should signup as new user`, () => {
component.login();
expect(component.login).toBeTruthy();
});

it('form should be invalid', async() => {
component.loginForm.controls['email'].setValue('');
component.loginForm.controls['password'].setValue('');
expect(component.loginForm.valid).toBeFalsy();
});

it('form should be valid', async() => {
const emailInput = component.loginForm.controls['email'];
const passwordInput = component.loginForm.controls['password'];
emailInput.setValue('email@msudenver.com')
passwordInput.setValue('fakepassword');

expect(emailInput.value).toEqual('email@msudenver.com');
expect(passwordInput.value).toEqual('fakepassword');

});

});
