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
  constructor(public httpClient:HttpClient , public geolocation:Geolocation , public platform:Platform) 
  {
    this.platform.ready().then(()=>{
       this.GetCurrentLocation();
    })
  }
  
  GetCurrentLocation()
  {
    this.geolocation.getCurrentPosition().then((position)=>{
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      
    })

  }

  GetCurrentTemperature()
  {


  }

}
