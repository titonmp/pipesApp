import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: "app-uncommon-page",
  templateUrl: "./uncommon-page.component.html",
  styleUrls: ["./uncommon-page.component.css"],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = "Nolberto";
  public gender: "male" | "female" = "male";
  public invitationMap = {
    male: "invitarlo",
    female: "invitarla",
  };

  changeClient(): void {
    this.name = "Melissa";
    this.gender = "female";
  }

  //i18nPlural
  public clients: string[] = [
    "Maria",
    "Pedro",
    "Fernando",
    "Hernando",
    "Edudardo",
    "Melissa",
    "Natalia",
  ];
  public clientsMap = {
    "=0": "no tenemos ningun cliente esperando.",
    "=1": "tenemos 1 cliente esperando.",
    "=2": "tenemos 2 personas esperando.",
    "other": "tenemos # clientes esperando."
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Nolberto',
    age: 32,
    address: 'Los Mochis, Sinaloa'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log(value))
  );

  public promiseValue:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log("Tenemos data en la promesa.");
      this.person.name = "Otro nombre";
    }, 3500);
  })
}
