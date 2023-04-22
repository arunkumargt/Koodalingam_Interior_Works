import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  address: any = {
    name: "Address",
    value: "1052, Sivan Kovil Nandhavanam Street"
  };

  email: any = {
    name: "Email",
    value: "interiordesign@gmail.com"
  };

  phone: any = {
    name: "Phone Number",
    value: "+91 763 978 5606"
  }
  
  
}
