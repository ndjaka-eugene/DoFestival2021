import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.scss'],
  selector: 'app-category',
  encapsulation: ViewEncapsulation.None
})

export class CategoryComponent {
  @Input() src: string = '';
  @Input() city: string = '';
  @Input() quarter: string = '';
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() description: HTMLElement;

}
