import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonUtils {
  
  scrollToTop(): void {
    
    console.log(' Hello:', );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
