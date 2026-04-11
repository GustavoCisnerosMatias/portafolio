import { Component } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../entities/projects.entities';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  faRocket = faRocket;
  projects: projects[] = [
    {
      id: '1',
      description:
        'My first webscraping, Using Python plus the beautifulSoup library to extract data from an Ecuadorian news website and saving to CSV',
      title: 'WebScraping BeutifulSoup',
      url: 'https://github.com/GustavoCisnerosMatias/beautifulSoap',
    },
    {
      id: '2',
      description:
        'Use Selenium to be able to give parameters to the web application to obtain hotel prices on trivago.com.ec and save to CSV.',
      title: 'WebScraping Selenium',
      url: 'https://github.com/GustavoCisnerosMatias/Selenium',
    },
    {
      id: '3',
      description:
        ' A desktop application using a SQL Server Database, using FXML for the visual part and Java, allowing the management of hotel room reservations, invoice and a reports section',
      title: 'Hotel',
      url: 'https://github.com/GustavoCisnerosMatias/projectHotel/tree/main',
    },
    {
      id: '4',
      description:
        'This project is responsible for the management of a store from billing and warehouse control, it has a part for cashiers and another for administrator depending on the credentials connecting to SQL Server and using Fxml for the interface',
      title: 'Store',
      url: 'https://github.com/GustavoCisnerosMatias/projectStore',
    },
    {
      id: '5',
      description:
        'An application to manage inventory, it is the classic CRUD that allows us to operate with products, suppliers, inventories, depending on the type of User, We use Ionic for the frontend, Fat-Free that uses Php for the backend and mysql for the database',
      title: 'Inventory',
      url: 'https://github.com/GustavoCisnerosMatias/Inventory',
    },
    {
      id: '6',
      description:
        'An app that is used to manage tables in a restaurant, additionally the customer can start ordering by scanning a QR code that is on the table. We use Ionic based on Angular for the frontend, we use Fat-Free as the backend and Mysql for the database',
      title: 'Arcane',
      url: 'https://github.com/GustavoCisnerosMatias/Arcane',
    },
  ];
}
