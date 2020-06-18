import { Component, OnInit } from '@angular/core';
// Servicio
import { ApiService } from '../../services/api.service';
// Url de la API
import { Global } from '../../services/global';
// Rutas
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  public url:string;
  public networks:any [] = [];
  public networkDetalle:any;
  public networkStations:any [] = [];
  public marcadores:any [] = [];

  // Configuración de Google Maps 
  public lat: number;
  public lng: number;

  constructor(private _service: ApiService, private _route:ActivatedRoute, private _router: Router) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._service.getNetworkBikes()
    .subscribe(data => {
      // console.log(data);
        this.networks = data
    });
  }

  detalleElemento(id:string){
    // Obtenemos el ID de la url para luego llamar a nuestro servicio
    this._service.getNetworkBikesById(id)
        .subscribe((data: any) => {
          for (let index = 0; index < data.network.stations.length; index++) {
            this.marcadores = data.network.stations;
          }
          // console.log(data);
          this.networkDetalle = data;
      });
  }

}
