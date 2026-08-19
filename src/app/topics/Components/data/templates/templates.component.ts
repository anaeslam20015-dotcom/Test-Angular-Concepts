import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.css',
})
export class TemplatesComponent {
  /* --- test-Template --- */
  name = 'Ahmed';
  age = 25;
  loading = false;
  sayHello() {
    this.loading = true;
  }

  /* --- data-binding --- */
  imageUrl = 'assets/wallpaperflare.com_wallpaper.jpg';
  iconName = 'Kakashi Hatake ';
  iconAge = 33;
  iconJob = 'Anbu Captain';
  UserName = '';
  UserName_ = '';
  showData = false;
  Show() {
    this.showData = !this.showData;
  }
  ShowName(name: string) {
    if (name === '') {
      alert('Enter Your Name');
    } else {
      this.UserName_ = name;
    }
  }

  /* --- directives --- */
  Students = [
    {
      id: 1,
      Name: 'Naruto Uzumaki',
      age: 17,
      image: 'assets/naroto.png',
    },
    {
      id: 2,
      Name: 'Sasuke Uchiha',
      age: 16,
      image: 'assets/sascy.png',
    },
    {
      id: 3,
      Name: 'Sakura Haruno',
      age: 14,
      image: 'assets/sacore.png',
    },
  ];
}
