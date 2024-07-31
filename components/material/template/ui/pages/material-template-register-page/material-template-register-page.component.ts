import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MaterialApiConnector} from "../../../../http/MaterialApiConnector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-material-template-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
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
      name: new FormControl({}),
      unit: new FormControl({}),
      unitPrice: new FormControl({})
    });
  }

  public send(){
    this.materialApiConnector
      .register(this.formGroup.value)
      .subscribe( () => this.router.navigate(["/pages/material/template"]) );
  }

}
