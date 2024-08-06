import { Component } from '@angular/core';
import {TopbarComponent} from "../../sections/navigation/topbar/topbar.component";

@Component({
  selector: 'app-page-style1',
  standalone: true,
  imports: [
    TopbarComponent
  ],
  templateUrl: './page-style1.component.html',
  styleUrl: './page-style1.component.scss'
})
export class PageStyle1Component {

}
