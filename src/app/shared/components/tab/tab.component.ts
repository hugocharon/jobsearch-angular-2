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
  public tabs: string[] = ['Jobs', 'Favourites'];
  public activeTab: string = this.tabs[0];

  public selectTab(tab: string): void {
    this.activeTab = tab;
  }
}
