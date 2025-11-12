import { Component, Input } from '@angular/core';
import { SharedImports } from '../../shared-imports';
import { Settings } from 'http2';

interface PageSection {
  title?: string;
  paragraphs?: string[];
  note?:string;
  image?: string;
  contentBgImage?: boolean;
  reverse?: boolean;
}

@Component({
  selector: 'app-common-img-and-content',
  imports: [SharedImports],
  templateUrl: './common-img-and-content.html',
  styleUrl: './common-img-and-content.scss',
})
export class CommonImgAndContent {
  @Input() headerBg!: string;
  @Input() headerTitle!: string;
  @Input() headerSubTitle!: string;
  @Input() sections: PageSection = {};

}
