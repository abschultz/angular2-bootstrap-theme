import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: []
})

export class AppComponent {
	navLinks = [
		{'route': '/home', 'title': 'Home'},
		{'route': '/about', 'title': 'About'}
	];
	toggled = false;
  toggleNav(): void {
    this.toggled = !this.toggled;
  }
}
