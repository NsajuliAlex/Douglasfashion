import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public lowerProducts: any;
  public upperProducts: any;
  public aboutUs: any;

  constructor(private buildForm: FormBuilder) {

  }

  subscribeForm = this.buildForm.group({
    Username: ['', Validators.required],
    Email: ['', Validators.required],
    Telephone: [''],
    Subscribe: ['']
});

  ngOnInit() {

    this.aboutUs = {
      title: `Mehr als 8 Mio. loyal Kunden Warten auf Sie`,

      Descriptions : [
        {
          desc: `We sort the salons according to your individual criteria`
        },
        {
          desc: `All the salons listed by us meet the high beauty standards of Douglas.`
        },
        {
          desc: `every time you book, you'll receive valuable Beauty Points`
        },
      ]
    }

    this.lowerProducts = {
      lowerTitle: 'Shore + Douglas',
      shortdescription: `My first website
        Lorem ipsum dolor sit, amet consectetur adipisicing email4
        Cumque sed nobis ab modi expedita at quaerat voluptate, maiores eaque, ullam porro!`,

      productList: [
        {
          icon: `./assets/images/icons/no_extra_cost_style.svg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.vestibulum ut.
            `
        },
        {
          icon: `./assets/images/icons/customer_management_style.svg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.vestibulum ut.
            `
        },
        {
          icon: `./assets/images/icons/points_style.svg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.vestibulum ut.
            `
        },
        {
          icon: `./assets/images/icons/web_presentation_style.svg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.vestibulum ut.
          `
        },
        {
          icon: `./assets/images/icons/newsletter_style.svg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.vestibulum ut.
          `
        }
      ],
    };
    this.upperProducts = {
      upperTitle: `WERDE SIE TEIL DER EXKLUSIVEN BEAUTY PLATFORM VON DOUGH UND GEWINNEN SIE NEUE KUNDEN!`,

      productList: [
        {
          icon: `./assets/images/icons/online_booking_style.svg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.vestibulum .
            `
          },
        {
          icon: `./assets/images/icons/domain_style.svg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.vestibulum.
          `
        },
        {
          icon: `./assets/images/icons/responsive_style.svg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.vestibulum.
          `
        },
        {
          icon: `./assets/images/icons/notification_style.svg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.vestibulum.
          `
        },
      ],
    };
  }
}
