import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { minimumAgeValidator } from './Validators/minimumAge.validator';

@Component({
  selector: 'app-exo15',
  templateUrl: './exo15.component.html',
  styleUrls: ['./exo15.component.scss']
})
export class Exo15Component implements OnInit {

  form!: FormGroup;

  constructor (private fb: FormBuilder) { }

  ngOnInit (): void {
    this.form = this.fb.group({
      birthdate: ['', minimumAgeValidator]
    });
  }
}
