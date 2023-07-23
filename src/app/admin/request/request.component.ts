import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgFor]

})
export class RequestComponent implements OnInit{

  toppings = new FormControl('');
  toppingList: string[] = ['SatyaRaj', 'PouuuBoyyy', 'Rupesh', 'Suman', 'Gyalbu', 'Rujan'];
  fileInput: any;
  constructor() {}

  ngOnInit() {}

  upload() {

    // Get the file from the input element.
    const file = this.fileInput.nativeElement.files[0];

    // Upload the file to the server.
    const url = '/api/upload';
    const headers = {
      'Content-Type': file.type
    };
    const method = 'POST';

    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.setRequestHeader('Content-Type', file.type);
    request.send(file);
  }
}
