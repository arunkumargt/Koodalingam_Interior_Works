import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  menus: any = [
    {
      id: "home",
      value: "Home",
    },
    {
      id: "services",
      value: "Services",
    },
    {
      id: "about",
      value: "About",
    },
    {
      id: "portfolio",
      value: "Portfolio",
    },
    {
      id: "team",
      value: "Team",
    },
    {
      id: "price",
      value: "Price",
    },
    {
      id: "contact",
      value: "Contact",
    },
  ];

  sliders: any = [
    {
      image: "assets/img/intro/banner-bg1.png",
      name: "LightUp Your Design",
      desc: "Extra Special Touch",
    },
    {
      image: "assets/img/intro/banner-bg2.png",
      name: "Get Your Dream Light",
      desc: "Décor with Charming",
    },
    {
      image: "assets/img/intro/banner-bg3.png",
      name: "Feel The Natural Beauty",
      desc: "Modern-edge Design",
    },
  ];
}
