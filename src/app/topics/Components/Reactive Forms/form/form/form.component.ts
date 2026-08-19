import { Component } from '@angular/core';
import { Validators, ValidationErrors } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  FormGroupName,
  ReactiveFormsModule,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  loginForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
  });
  get Name() {
    return this.loginForm.get('Name');
  }
  get Email() {
    return this.loginForm.get('Email');
  }
}
