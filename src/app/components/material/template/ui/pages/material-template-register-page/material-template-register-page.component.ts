import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MaterialApiConnector} from "../../../../http/MaterialApiConnector";
import {Router} from "@angular/router";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-material-template-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel
  ],
  templateUrl: './material-template-register-page.component.html',
  styleUrl: './material-template-register-page.component.scss'
})
export class MaterialTemplateRegisterPageComponent {

  protected formGroup: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private materialApiConnector: MaterialApiConnector,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      name: new FormControl(''),
      unit: new FormControl(''),
      unitPrice: new FormControl('')
    });
  }

  public send(){
    this.materialApiConnector
      .register(this.formGroup.value)
      .subscribe( () => this.router.navigate(["/pages/material/template"]) );
  }

}
