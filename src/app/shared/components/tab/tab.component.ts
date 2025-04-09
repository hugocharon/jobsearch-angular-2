import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  tabs: string[] = ['Jobs', 'Favourites'];
  activeTab: string = this.tabs[0];

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  getRoute(tab: string): string {
    switch (tab) {
      case 'Jobs':
        return '/jobs';
      case 'Favourites':
        return '/favourite';
      default:
        return '/jobs';
    }
  }
}
