import { Component } from '@angular/core';
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatLabel} from "@angular/material/form-field";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MaterialApiConnector} from "../../../../material/http/MaterialApiConnector";
import {ProductApiConnector} from "../../../http/ProductApiConnector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-register-page',
  standalone: true,
  imports: [
    MatInput,
    MatFormField,
    MatButton,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './product-register-page.component.html',
  styleUrl: './product-register-page.component.scss'
})
export class ProductRegisterPageComponent {

  protected formGroup: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private productApiConnector: ProductApiConnector,
    private router: Router
  ) {

    this.formGroup = this.formBuilder.group({
      name: new FormControl(''),
      bomId: new FormControl(''),
      dimensions: new FormControl('')
    });

  }

  public send(){

    this.productApiConnector
    .register(JSON.stringify(this.formGroup.value))
    .subscribe(() => {
      this.router.navigate(["/pages/product"]);
    });

  }

}
