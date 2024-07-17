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
  selector: 'app-centralized-quotation',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, CountUpModule, MDModalModule, GoogleMapsModule, NgApexchartsModule, MnDropdownComponent, LucideAngularModule, NGXPagination],
  templateUrl: './centralized-quotation.component.html',
  styleUrl: './centralized-quotation.component.scss',
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class CentralizedQuotationComponent implements OnInit{

  constructor(){}

  Inquiry:boolean = false;
  Shipment:boolean = false;
  Air:boolean = false;
  Rates:boolean = false;
  Documents:boolean = false;

  air:boolean = false;
  ocean:boolean = false;

  ngOnInit(): void {
  this.toggle('Inquiry');  
  }

  toggle(type:string){
    if (type == 'Inquiry'){
     this.Inquiry = true;
     this.Shipment =false;
     this.Air = false;
     this.Rates = false;
     this.Documents = false;
    }else if (type == 'Air'){
     this.Inquiry = false;
     this.Shipment =false;
     this.Air = true;
     this.Rates = false;
     this.Documents = false;
    }else if (type == 'Shipment'){
     this.Inquiry = false;
     this.Shipment = true;
     this.Air = false;
     this.Rates = false;
     this.Documents = false;
    }else if (type == 'Rates'){
      this.Inquiry = false;
      this.Shipment = false;
      this.Air = false;
      this.Rates = true;
      this.Documents = false;
    }else if (type == 'Documents'){
      this.Inquiry = false;
      this.Shipment = false;
      this.Air = false;
      this.Rates = false;
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
