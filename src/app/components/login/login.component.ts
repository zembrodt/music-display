import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
    const redirect = this.spotify.getAuthorizeRequestUrl();
    window.location.href = redirect;
  }

}
