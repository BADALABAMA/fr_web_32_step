import { Component } from '@angular/core';
import { ResourceService } from '../resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
})
export class ResourcesComponent {
  constructor(public resources: ResourceService) {}
  public resource: any;

  public topics: any[] = [
    {
      label: 'Front-end',
      url: '/resources/front-end',
    },
    {
      label: 'Back-end',
      url: '/resources/back-end',
    },
    {
      label: 'QA',
      url: '/resources/qa',
    },
  ];

  ngOnInit(): void {
    console.log(this.resources.currentTopic);

    if (!this.resources.currentTopic) {
      this.resources.getResources().subscribe((data) => {
        this.resource = data;
      });
    } else if (this.resources.currentTopic === 'front-end') {
      this.resources.getResourcesFront().subscribe((data) => {
        this.resource = data;
      });
    } else if (this.resources.currentTopic === 'back-end') {
      this.resources.getResourcesBack().subscribe((data) => {
        this.resource = data;
      });
    } else if (this.resources.currentTopic === 'qa') {
      this.resources.getResourcesQA().subscribe((data) => {
        this.resource = data;
      });
    }
  }

  public onClickHandler(link: HTMLElement) {
    switch (link.textContent.trim().toLowerCase()) {
      case 'front-end':
        this.resources.getResourcesFront();
        break;
      case 'back-end':
        this.resources.getResourcesBack();
        break;
      case 'qa':
        this.resources.getResourcesQA();
        break;

      default:
        break;
    }

    console.log(this.resource);
  }
}
