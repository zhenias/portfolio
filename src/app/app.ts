import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SocialMedia} from './social-media/social-media';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, SocialMedia],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}
