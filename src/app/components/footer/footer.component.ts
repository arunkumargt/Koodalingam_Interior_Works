import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  author_website: String = "https://arunkumargt.github.io/arunkumargt.in/";
  author_name: String = "Arun Kumar G T";
  design_develop_by: String = "Design & Developed By "
}
