import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 





@Component({
  selector: 'app-game-lists',
  templateUrl: './game-lists.component.html',
  styleUrls: ['./game-lists.component.css']
})
export class GameListsComponent implements OnInit {
  

 

  constructor( private http: HttpClient) { }


  private urlResult = 'https://www.random.org/integers/?num=2&min=0&max=5&col=1&base=10&format=plain';

  validaBusca:boolean = true;


  @Input() resultGametem1 = ""; 
  @Input() resultGametem2 = ""; 
  @Input() team1 = "";
  @Input() team2 = "";
  @Input() resultPlay = "";
  @Input() teams= [

  {
    team1:"Internacional",
    team2:"Gremio",
    resultGametem1:"0",
    resultGametem2:"0",
    resultPlay:"0"
  },
  {
    team1:"Goias",
    team2:"Flamengo",
    resultGametem1:"0",
    resultGametem2:"0",
    resultPlay:"0"
  },
  {
    team1:"Vasco",
    team2:"São Paulo",
    resultGametem1:"0",
    resultGametem2:"0",
    resultPlay:"0"
  },
  {
    team1:"Santos",
    team2:"Palmeiras",
    resultGametem1:"0",
    resultGametem2:"0",
    resultPlay:"0"
  }

];

@Input() octaves = [
{
    classified1:"classified",
    classified2:"classified",
    resultGametem1:"0",
    resultGametem2:"0"
},
{
  classified1:"classified",
  classified2:"classified",
  resultGametem1:"0",
  resultGametem2:"0"
}
];

@Input() endGame = [
  {
      classified1:"classified",
      classified2:"classified",
      resultGametem1:"0",
      resultGametem2:"0"
  }
  ];

    


  
  ngOnInit(){
   

    for (var i = 0; i < 4; i++) {    
      this.getData(i);
    }

    localStorage.setItem("search", "valid");
    
}

onClickMe(i) {
   this.getDataOnly(i); 
  
}

onPlayAgin(){
 
  this.octaves = [
    {
        classified1:"classified",
        classified2:"classified",
        resultGametem1:"0",
        resultGametem2:"0"
    },
    {
      classified1:"classified",
      classified2:"classified",
      resultGametem1:"0",
      resultGametem2:"0"
    }
    ]
  var search = localStorage.getItem("search"); 
  localStorage.setItem("search", "valid")

  for (var i = 0; i < 4; i++) {    
    this.getData(i);
  } 

}

onNextStage(){
  

for (var j = 0; j < 2; j++) {  

    if(this.teams[j].resultGametem1 > this.teams[j].resultGametem2 && this.teams[j].resultGametem1 != this.teams[j].resultGametem2){
      
      this.octaves[0].classified1 = this.teams[j].team1;
    }else{
      
      this.octaves[0].classified2 =this.teams[j].team2;}    
} 
for (var i = 2; i < 4; i++) {  

    if(this.teams[i].resultGametem1 > this.teams[i].resultGametem2 && this.teams[i].resultGametem1 != this.teams[i].resultGametem2  ){

      this.octaves[1].classified1 = this.teams[i].team1;

    }else{
      
      this.octaves[1].classified2 =this.teams[i].team2;}
      
}

}


onFinal(){
  

  for (var j = 0; j < 2; j++) {  
  
      if(this.octaves[j].resultGametem1 > this.octaves[j].resultGametem2 && this.octaves[j].resultGametem1 != this.octaves[j].resultGametem2){
        
        this.endGame[0].classified1 = this.octaves[j].classified1;
      }else{
        
        this.endGame[0].classified2 =this.octaves[j].classified2;}    
  } 

  
  }




  async getData(j){
    
    
    var search = localStorage.getItem("search");
  
    if(search != "invalid"){
  

      let result = await this.http.get(this.urlResult,{responseType: 'text'}).toPromise();

      this.teams[j].resultGametem1 = result[0];
      this.teams[j].resultGametem2 = result[2];

      if(j==3){
        this.validaBusca = false;
        localStorage.setItem("search", "invalid");

      }
    
    }
} 



async getDataOnly(j){
    

    let result = await this.http.get(this.urlResult,{responseType: 'text'}).toPromise();

    this.teams[j].resultGametem1 = result[0];
    this.teams[j].resultGametem2 = result[2];

    this.onNextStage();
} 

async getDataSemi(j){
    

  let result = await this.http.get(this.urlResult,{responseType: 'text'}).toPromise();

  this.octaves[j].resultGametem1 = result[0];
  this.octaves[j].resultGametem2 = result[2];

  this.onNextStage();
} 

async getDataFinal(j){
    

  let result = await this.http.get(this.urlResult,{responseType: 'text'}).toPromise();

  this.endGame[j].resultGametem1 = result[0];
  this.endGame[j].resultGametem2 = result[2];

  this.onFinal();
} 

 

}
