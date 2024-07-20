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
import { CollapsibleDirective } from '../../Component/collapse';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, CountUpModule, MDModalModule, GoogleMapsModule, NgApexchartsModule, CollapsibleDirective, MnDropdownComponent, LucideAngularModule, NGXPagination],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class AdminPanelComponent {

}
