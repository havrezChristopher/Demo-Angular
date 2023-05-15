import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form!: FormGroup;

  constructor (
    private _productService: ProductService,
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit (): void {
    this.form = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.min(0), Validators.max(9999)]],
    });
  }

  onSubmit (): void {
    console.log('this.form.value :>> ', this.form.value);

    if (this.form.invalid) return;
    this._productService
      .add(this.form.value)
      .subscribe(() => this._router.navigateByUrl('/demos/demo21'));
  }

}
