import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RequestComponent } from "./request/request.component";
import { ApprovalComponent } from "./approval/approval.component";

const routes: Routes =[

  {
    path:'dashboard',
    component: DashboardComponent,
    children: [
      {
        path : 'make_request',
        component : RequestComponent
      },
      {
        path : 'approve_request',
        component : ApprovalComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
