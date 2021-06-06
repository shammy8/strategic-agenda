import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'strategic-agenda-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [
    {
      id: 'language-button',
      label: 'Lang',
      items: [
        {
          id: 'english-button',
          label: 'en',
          command: (e) => {
            this.translocoService.setActiveLang(e.item.label);
          },
        },
        {
          id: 'chinese-button',
          label: 'zh',
          command: (e) => {
            this.translocoService.setActiveLang(e.item.label);
          },
        },
      ],
    },
  ];

  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {}
}
