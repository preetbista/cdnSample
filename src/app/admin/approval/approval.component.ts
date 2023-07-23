import { Component, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent {

  displayedColumns: string[] = ['position', 'name', 'email', 'age','reject', 'action'];

  @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule | undefined;

  ngAfterViewInit() {
    this.paginator = this.paginator;
  }

}
