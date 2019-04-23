import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.css']
})
export class AuthWrapperComponent implements OnInit {

  autenticatedUser=true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    
  }

}
