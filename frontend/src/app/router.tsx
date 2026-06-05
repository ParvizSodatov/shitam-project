import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/about';
import { NaturePage } from '@/pages/nature';
import { GalleryPage } from '@/pages/gallery';
import { PeoplePage } from '@/pages/people';
import { DirectionsPage } from '@/pages/directions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'nature', element: <NaturePage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'people', element: <PeoplePage /> },
      { path: 'directions', element: <DirectionsPage /> },
    ],
  },
]);
