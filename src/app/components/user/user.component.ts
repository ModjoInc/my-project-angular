import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Posts[];
  isEdit:boolean = false;

  constructor(private DataService:DataService) { 

  }

  ngOnInit() {
    this.name = 'Habib El Maaza Gomez';
    this.age = 35;
    this.address = {
      street: 'Rue fontainas 45',
      city: 'Brussels',
      country: 'Belgium'
    }
    this.hobbies = ['coding', 'gaming', 'travel'];

    this.DataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;

    });
  }

  onClick() {
    window.alert('Hello');
    this.name="Habibou";
    this.hobbies.push('Autre Loisir');
  }
  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.push(hobby);
    return false;
    
  }
  deleteHobby(hobby) {
    for(let i=0; i< this.hobbies.length; i++){
      if(this.hobbies[i] == hobby ){
        this.hobbies.splice(i, 1);
      }
    }
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Address {
  street:string,
  city:string,
  country:string
}

interface Posts{
  id:number,
  title:string,
  body:string,
  userId:number
}