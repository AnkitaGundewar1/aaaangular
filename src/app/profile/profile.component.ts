import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(8)],
      mobile: ['', [Validators.pattern(/^\d{10}$/)]], // Add the mobile control
    });
  }

  get usernameInvalid() {
    return (
      this.profileForm.get('username')?.invalid &&
      (this.profileForm.get('username')?.dirty ||
        this.profileForm.get('username')?.touched)
    );
  }

  get emailInvalid() {
    return (
      this.profileForm.get('email')?.invalid &&
      (this.profileForm.get('email')?.dirty ||
        this.profileForm.get('email')?.touched)
    );
  }

  get mobileInvalid() {
    return (
      this.profileForm.get('mobile')?.invalid &&
      (this.profileForm.get('mobile')?.dirty ||
        this.profileForm.get('mobile')?.touched)
    );
  }

  get passwordInvalid() {
    return (
      this.profileForm.get('password')?.invalid &&
      (this.profileForm.get('password')?.dirty ||
        this.profileForm.get('password')?.touched)
    );
  }

  updateProfile() {
    // Implement your update logic here
  }
}
