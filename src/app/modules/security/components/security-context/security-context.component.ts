import { Component } from '@angular/core';
import { SecurityFooterComponent } from '../security-footer/security-footer.component';
import { SecurityHeaderComponent } from "../security-header/security-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-security-context',
  imports: [SecurityFooterComponent, SecurityHeaderComponent, RouterOutlet],
  standalone:true,
  templateUrl: './security-context.component.html',
  styleUrl: './security-context.component.scss'
})
export class SecurityContextComponent {

}
