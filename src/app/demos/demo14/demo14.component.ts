import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrls: ['./demo14.component.scss']
})
export class Demo14Component implements OnInit {

  // Avec TWB (Two-Way Binding)
  name: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';

  sendTWB (): void {
    console.log("Demo14Component  name:", this.name);
    console.log("Demo14Component  email:", this.email);
    console.log("Demo14Component  password:", this.password);
    console.log("Demo14Component  gender:", this.gender);

  }

  // Avec Validator

  form!: FormGroup;

  constructor (private fb: FormBuilder) { }

  get nameControl () {
    return this.form.controls['name'];
  }

  ngOnInit (): void {

    this.form = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)], []],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'gender': ['', [Validators.required]],
    });

    // console.log("Demo14Component  ngOnInit  form:", this.form);

    console.log(this.form.controls);
    console.log(this.form.controls['name']);

    // console.log(this.form.get('name'));

  }

  send (): void {
    console.log(this.form);
  }

}
