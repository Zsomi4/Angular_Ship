import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ships:any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getShips();
  }

  getShips() {  
    this.api.getShips().subscribe({
      next: (ships) => {
        console.log(ships)
        this.ships = ships;
      },
      error: (err) => {
        console.log('Hiba! A REST API elérése sikertelen!')
        console.log(err)
      }
    });
  }
}
