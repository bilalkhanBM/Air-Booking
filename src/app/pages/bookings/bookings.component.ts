import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { CountUpModule } from 'ngx-countup';
import { getChartColorsArray } from '../../shared/commonFunction';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MnDropdownComponent } from '../../Component/dropdown';
import { ProductsStatisticsData } from '../../data/dashboard';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { NGXPagination } from '../../Component/pagination';
import { MDModalModule } from '../../Component/modals';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, CountUpModule, MDModalModule, GoogleMapsModule, NgApexchartsModule, MnDropdownComponent, LucideAngularModule, NGXPagination],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss',
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class BookingsComponent implements OnInit {
  
  constructor(){}

  Booking:boolean = false;
  Air:boolean = false;
  Documents:boolean = false;

  Basic:boolean = false;
  Description:boolean = false;
  Entities:boolean = false;
  Equipments:boolean = false;

  air:boolean = false;
  ocean:boolean = false;


  ngOnInit(): void {

  }


  toggle(type:string){
    if (type == 'Booking'){
      this.Booking = true;
      this.Air =false;
      this.Documents = false;
    }else if (type == 'Air'){
      this.Booking = false;
      this.Air =true;
      this.Documents = false;
    }else if (type == 'Documents'){
      this.Booking = false;
      this.Air =false;
      this.Documents = true;
    }
  }

  toggle1(type:string){
    if (type == 'Basic'){
     this.Basic = true;
     this.Description =false;
     this.Entities = false;
     this.Equipments = false;
     this.Booking = false;
    }else if (type == 'Description'){
     this.Basic = false;
     this.Description =true;
     this.Entities = false;
     this.Equipments = false;
     this.Booking = false;
    }else if (type == 'Entities'){
     this.Basic = false;
     this.Description =false;
     this.Entities = true;
     this.Equipments = false;
     this.Booking = false;
    }else if (type == 'Equipments'){
     this.Basic = false;
     this.Description =false;
     this.Entities = false;
     this.Equipments = true;
     this.Booking = false;
    }else if (type == 'Booking'){
     this.Basic = false;
     this.Description =false;
     this.Entities = false;
     this.Equipments = false;
     this.Booking = true;
    }
  }


  onSelect(event: any) {
    let type = event.target.value;
    if (type == 'Air') {
      this.air = true;
      this.ocean = false;
      this.toggle('Booking');  
    } else if (type == 'Ocean') {
      this.air = false;
      this.ocean = true;
      this.toggle1('Basic');  
    }

  }

}
