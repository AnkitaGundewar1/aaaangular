import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Assuming a 10-digit mobile number
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
    });
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get mobile() {
    return this.registrationForm.get('mobile');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get repeatPassword() {
    return this.registrationForm.get('repeatPassword');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Handle form submission logic
      console.log('Form submitted:', this.registrationForm.value);
    }
  }
}
