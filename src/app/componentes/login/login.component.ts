import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Login(email:string){
    /*provisional*/
    let datosLogin = {
      email: email,
      isLogged: true
    };

    localStorage.setItem('login', JSON.stringify(datosLogin));
    this.router.navigate(['']);
  }
  contraOlvidada(){
    alert("Haber estudiao");
  }
}
