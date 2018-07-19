import { FirstComponent } from "./first/first.component";
import { RouterModule } from '@angular/router';
import { SecondComponent } from "./second/second.component";
import { ForgotComponent } from "./forgot/forgot.component";

const APP_ROUTES =[

{path:'', component:FirstComponent},
{path:'second/:usNm' , component:SecondComponent},
{path:'forgot' , component:ForgotComponent}

];

export  const MyRouterModule = RouterModule.forRoot(APP_ROUTES);
