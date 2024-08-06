import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-order-register-page',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './order-register-page.component.html',
  styleUrl: './order-register-page.component.scss'
})
export class OrderRegisterPageComponent {

}
