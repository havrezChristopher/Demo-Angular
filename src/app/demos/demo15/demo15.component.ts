import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emailValidator } from './Validators/email.validator';
import { nameValidator } from './Validators/name.validator';
import { twoPasswordValidate } from './Validators/twoPasswordValidate.validator';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html',
  styleUrls: ['./demo15.component.scss']
})
export class Demo15Component implements OnInit {

  form!: FormGroup;

  constructor (private fb: FormBuilder) { }

  ngOnInit (): void {
    this.form = this.fb.group({
      name: ['', nameValidator],
      email: ['', [emailValidator]],
      password: ['', []],
      verifyPassword: ['', []],
    }, {
      validators: [twoPasswordValidate,]
    });

    console.log("Demo15Component  ngOnInit  form:", this.form);
  }

}
