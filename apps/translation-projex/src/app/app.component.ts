import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'strategic-agenda-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  items: MenuItem[] = [
    {
      id: 'language-button',
      label: 'Lang',
      items: [
        {
          id: 'english-button',
          label: 'English',
          command: () => {
            this.translocoService.setActiveLang('en');
          },
        },
        {
          id: 'chinese-button',
          label: '繁體',
          command: () => {
            this.translocoService.setActiveLang('zh');
          },
        },
      ],
    },
  ];

  constructor(private translocoService: TranslocoService) {}
}
