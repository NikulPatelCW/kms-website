import { Component, inject } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { CommonUtils } from '../../core/commonUtils';

@Component({
  selector: 'app-footer',
  imports: [SharedImports],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  
  private commonUtils = inject(CommonUtils);
  handleRouterChange(){
    this.commonUtils.scrollToTop()
  }

}
