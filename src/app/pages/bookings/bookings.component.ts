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

  air:boolean = false;
  ocean:boolean = false;


  ngOnInit(): void {
    this.toggle('Booking');  
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


  onSelect(event: any) {
    let type = event.target.value;
    if (type == 'Air') {
      this.air = true;
      this.ocean = false;
    } else if (type == 'Ocean') {
      this.air = false;
      this.ocean = true;
    }

  }

}
