import { Injectable } from '@angular/core';
// Peticiones Http
import { HttpClient } from '@angular/common/http';
// Operadores
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Url de API
import { Global } from "./global";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public urlApi:string;
  public networks:any [] = [];

  constructor(private _http: HttpClient) { 
    this.urlApi = Global.url;
  } 

  getNetworkBikes():Observable<any>{
    return this._http.get(`${this.urlApi}`).pipe(map(
      (response:any) => {
        let listaNetworks: any[] = [];
        for (let index = 0; index < response.networks.length; index++) {
          if(response.networks[index].location.country === 'ES' &&
             (response.networks[index].name != 'Onroll' && response.networks[index].name != 'Onroll Via Verde')){
            const network: any = {
              href: response.networks[index].href,
              id: response.networks[index].id,
              name: response.networks[index].name,
              city: response.networks[index].location.city
            };
            // push de los datos mediante spread
            listaNetworks = [...listaNetworks, network];
          }
        }
        return listaNetworks;
      }
    ));
  }

  getNetworkBikesById(id:string):Observable<any>{
    return this._http.get(`${this.urlApi}/${id}`).pipe(map(
      (response:any) => {
        return this.networks = response;
      }
    ));
  }


}
