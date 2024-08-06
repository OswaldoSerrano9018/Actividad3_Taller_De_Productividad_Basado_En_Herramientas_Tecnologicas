import {Component, Inject, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {BomApiConnector} from "../../../http/BomApiConnector";
import {Router} from "@angular/router";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-bom-register-page',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgForOf,
    MatAnchor,
    MatButton,
    MatLabel,
    MatInput,
    MatFormField
  ],
  templateUrl: './bom-register-page.component.html',
  styleUrl: './bom-register-page.component.scss'
})
export class BomRegisterPageComponent {

  protected formGroup: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private bomApiConnector: BomApiConnector,
    private router: Router
  ) {

    this.formGroup = this.formBuilder.group({
      materials: this.formBuilder.array([])
    });

  }

  public appendItemForm(){

    const newMaterialFormGroup = this.formBuilder.group({
      id: 0,
      quantity: 0
    });

    this.materials.push(newMaterialFormGroup);
  }

  public send(){
    const request = {
      bomId: 1,
      data: this.formGroup.value
    };

    const flat = JSON.stringify(request);

    this.bomApiConnector
      .register(flat)
      .subscribe( result => this.router.navigate(["/pages/bom"]));
  }

  get materials() {
    return this.formGroup.get('materials') as FormArray;
  }

}
