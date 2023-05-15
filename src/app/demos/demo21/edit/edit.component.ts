import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  form!: FormGroup;
  id!: number;

  constructor (
    private _productService: ProductService,
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.form = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.min(0), Validators.max(9999)]],
    });

    // Récupérer l'id dans l'URL
    this.id = this._route.snapshot.params['id'];
    this._productService
      .getById(this.id)
      .subscribe((data) => this.form.patchValue(data));
  }

  onSubmit (): void {
    console.log('this.form.value :>> ', this.form.value);

    if (this.form.invalid) return;
    this._productService
      .update(this.id, this.form.value)
      .subscribe(() => this._router.navigateByUrl('/demos/demo21'));
  }

}
