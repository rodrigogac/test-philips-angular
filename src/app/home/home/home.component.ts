import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  

  constructor() { }

  ngOnInit() {}




  images = [
    {
      url:"/assets/img/cavalinho-do-Vasco.gif",
      description:"VASCO"
    },
    {
      url: "assets/img/cavalinho-do-Sao-Paulo.gif",
      description :"SÃO PAULO"
    },
    {
      url : "assets/img/cavalinho-do-Santos.gif",
      description : "SANTOS"
    },
    {
      url :"assets/img/cavalinho-do-Palmeiras.gif",
      description : "PALMEIRAS"
    },
    {
      url: "assets/img/cavalinho-do-Internacional.gif",
      description: "INTERNACIONAL"
    },
    {
      url : "assets/img/cavalinho-do-Gremio.gif",
      description : "GREMIO"
    },
    {
      url : "assets/img/cavalinho-do-Goias.gif",
      description : "GOIAS"
    },
    {
      url : "assets/img/cavalinho-do-Flamengo.gif",
      description :"FLAMENGO"

    }

  ];

 
}
