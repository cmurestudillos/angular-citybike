import { Component, OnInit } from '@angular/core';
// Servicios
import { ApiService } from 'src/app/services/api.service';
// Url de la API
import { Global } from 'src/app/services/global';
// Rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public url:string;
  networks:any;

  constructor(private _service: ApiService, private _router: Router) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    // this._service.getNetworkBikes()
    //     .subscribe(resp => {
    //       this.networks = resp
    //     });
  }

}
