import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rutas
import { AppRoutingModule } from './app-routing.module';
// Peticiones Http
import { HttpClientModule } from '@angular/common/http';
// Servicios
import { ApiService } from './services/api.service';
// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/shared/footer/footer.component';
// Google Maps de Angular 9 
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    InicioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
