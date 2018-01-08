import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  pages: string[] = [];
  route: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (this.pages != null || this.pages != undefined)
        this.pages.splice(0, this.pages.length);


      if (event instanceof NavigationEnd) {
        switch (event.url) {
          
          case "/login": this.pages.push("Login")

            break;

          case "/store": this.pages.push("Shop")

            break;

          case "/sign-up": this.pages.push("Sign Up")

            break;

          case "/cart": this.pages.push("Your Cart")

            break;

            case "/faq": this.pages.push("FAQ")
            
                        break;

          default: 
            break;
        }

      }
    })

  }

}
