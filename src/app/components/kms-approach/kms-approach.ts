import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';

@Component({
  selector: 'app-kms-approach',
  imports: [SharedImports],
  templateUrl: './kms-approach.html',
  styleUrl: './kms-approach.scss',
})
export class KmsApproach {
  headerBgPath = 'assets/images/about-us-hero-bg.jpg';
  headerImgStyle: any = { 'background-image': `url(${this.headerBgPath})` };
  ngOnInit() {
    this.headerImgStyle = { 'background-image': `url(${this.headerBgPath})` };
  }
}
