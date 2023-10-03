import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  // dataSource = new MatTableDataSource<>();

  constructor() { }

  ngOnInit() {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  ngAfterViewInit() {
  }
  
}

