import { FirstComponent } from "./first/first.component";
import { RouterModule } from '@angular/router';
import { SecondComponent } from "./second/second.component";

const APP_ROUTES =[

{path:'', component:FirstComponent},
{path:'second' , component:SecondComponent}

];

export  const MyRouterModule = RouterModule.forRoot(APP_ROUTES);
