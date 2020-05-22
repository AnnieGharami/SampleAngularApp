import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


//const Swal = require('sweetalert2');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`display: flex;
  justify- content: center;
height: 100vh;
align-self: center;`]
})
export class HomeComponent {
  constructor(private http: HttpClient, private router: Router) { }

  username: string = '';
  userID: number;

  onEnter(username: string) {
    debugger;
    this.username = username;
    this.http.get<any>('https://jsonplaceholder.typicode.com/users?name=' + this.username).subscribe(data => {

      //this.postId = data.id;
      if (data != null) {
        this.userID = data[0].id;
        this.router.navigate(['/posts/', this.userID]);
      }
      else {
        //Swal.fire('User not found!');
      }
    })
  }
}
