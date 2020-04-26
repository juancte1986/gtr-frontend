import {Component, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';

import {LayoutService} from '@services/layout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('usItem')
  public usItem: ElementRef;
  @ViewChild('servicesItem')
  public servicesItem: ElementRef;
  @ViewChild('contactItem')
  public contactItem: ElementRef;
  @ViewChild('carouselItem')
  public carouselItem: ElementRef;

  constructor(private layoutService: LayoutService) { }

  public ngAfterViewInit(): void {
    this.layoutService.contactItem = this.contactItem.nativeElement;
    this.layoutService.contactItem = this.contactItem.nativeElement;
    this.layoutService.servicesItem = this.servicesItem.nativeElement;
    this.layoutService.usItem = this.usItem.nativeElement;
    this.layoutService.carouselItem = this.carouselItem.nativeElement;
  }

  public ngOnInit(): void { }

}
