import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        data: {
          title: 'Home',
          description: 'Welcome to Little Buds Garden Play School - A premier institution committed to academic excellence, holistic development, and nurturing future leaders since 1995.'
        }
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
        data: {
          title: 'About Us',
          description: 'Learn about Little Buds Garden Play School\'s rich history, vision, mission, campus, and values that have shaped excellence in education since 1995.'
        }
      },
      {
        path: 'admissions',
        loadComponent: () => import('./pages/admissions/admissions.component').then(m => m.AdmissionsComponent),
        data: {
          title: 'Admissions',
          description: 'Apply for admission to Little Buds Garden Play School. Learn about our admission process, eligibility criteria, and fee structure.'
        }
      },
      {
        path: 'academics',
        loadComponent: () => import('./pages/academics/academics.component').then(m => m.AcademicsComponent),
        data: {
          title: 'Academics',
          description: 'Explore our comprehensive CBSE curriculum, innovative teaching methodology, and academic programs designed for holistic student development.'
        }
      },
      {
        path: 'faculty',
        loadComponent: () => import('./pages/faculty/faculty.component').then(m => m.FacultyComponent),
        data: {
          title: 'Our Faculty',
          description: 'Meet our dedicated and experienced faculty members who inspire and guide students toward academic excellence.'
        }
      },
      {
        path: 'gallery',
        loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
        data: {
          title: 'Gallery',
          description: 'Browse through photos of our campus, events, sports activities, and cultural programs at Little Buds Garden Play School.'
        }
      },
      {
        path: 'events',
        loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent),
        data: {
          title: 'Events',
          description: 'Stay updated with upcoming and past events at Little Buds Garden Play School including sports, cultural festivals, and academic programs.'
        }
      },
      {
        path: 'notices',
        loadComponent: () => import('./pages/notices/notices.component').then(m => m.NoticesComponent),
        data: {
          title: 'Notices',
          description: 'View the latest notices and announcements from Little Buds Garden Play School.'
        }
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
        data: {
          title: 'Contact Us',
          description: 'Get in touch with Little Buds Garden Play School. Find our address, phone numbers, email, and send us a message.'
        }
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];
