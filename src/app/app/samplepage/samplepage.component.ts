import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-samplepage',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './samplepage.component.html',
  styleUrl: './samplepage.component.scss'
})
export class SamplepageComponent {

}
