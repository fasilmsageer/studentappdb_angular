import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent {

  

  name=""
  searchdata:any=[]

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data ={"name":this.name}
    console.log(data)

    this.api.searchStudent(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid Name")
        } else {
          this.searchdata=response;
        }
      }
    )
      
    
    }

}
