// Le fichier main.ts est le point d'entrée utilisé par angular pour lancer et initialiser (bootstrap) l'application.

import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);