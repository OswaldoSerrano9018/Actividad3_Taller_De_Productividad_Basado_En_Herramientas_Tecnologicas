import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ClientApiConnector} from "../../../http/ClientApiConnector";
import {Router} from "@angular/router";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatLabel} from "@angular/material/form-field";
import {MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-client-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    MatCardHeader
  ],
  templateUrl: './client-register-page.component.html',
  styleUrl: './client-register-page.component.scss'
})
export class ClientRegisterPageComponent {

  protected formGroup: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private clientApiConnector: ClientApiConnector,
    private router: Router
  ) {

    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control(""),
      contact: this.formBuilder.control("")
    });
  }

  public send(){

    this.clientApiConnector
      .register(JSON.stringify(this.formGroup.value))
      .subscribe(() => {
        this.router.navigate(["/pages/client"])
      });

  }

}
