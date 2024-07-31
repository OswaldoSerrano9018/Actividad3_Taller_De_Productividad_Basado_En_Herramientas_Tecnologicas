import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ClientApiConnector} from "../../../http/ClientApiConnector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
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
      .register(
        this.formGroup.get("name")!.value,
        this.formGroup.get("contact")!.value
      )
      .subscribe(() => {
        this.router.navigate(["/pages/client"])
      });

  }

}
