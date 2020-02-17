import { Component } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {HttpClient} from '@angular/common/http';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  place:string="";
  type:string="";
  icon:string="";
  temperature:string="";
  constructor(public httpClient:HttpClient , public geolocation:Geolocation , public platform:Platform) //Inicializo las tres importaciones en el constructor
  {
    this.platform.ready().then(()=>{
       this.GetCurrentLocation();
    })
  }
  
  GetCurrentLocation()//Metodo para obtener la ubicación actual del usuario
  {
    this.geolocation.getCurrentPosition().then((position)=>{
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      this.GetCurrentTemperature(latitude,longitude);
      
    })

  }

  GetCurrentTemperature(latitude,longitude)
  {
    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude
    +"&lon="+longitude+"&appid=0dde8a3bb4818847ad49139a8ca2f963";

    //llamada get a la api de https://openweathermap.org/
    //después del registro, recibirá una solicitud por correo
    this.httpClient.get("").subscribe((temperaturedata)=>{
      var obj = <any> temperaturedata;
      this.place= obj.name;
      this.type = obj.weather[0].main;
      this.icon = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
      this.temperature = ((parseFloat(obj.main.temp)-273.15).toFixed(2)).toString()+"ºC";
    })

  }

}
