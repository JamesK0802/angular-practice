import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-example',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './card-example.html',
  styleUrl: './card-example.css',
})
export class CardExample {
  isSidePanel = signal(false);

  openSidePanel() {
    this.isSidePanel.set(true);
  }
  closeSidePanel() {
    this.isSidePanel.set(false);
  }
}
