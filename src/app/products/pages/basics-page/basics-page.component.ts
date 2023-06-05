import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'nolberto';
  public nameUpper: string = 'NOLBERTO';
  public fullName: string = 'nOLbeRtO';
  public customDate: Date = new Date();
}
