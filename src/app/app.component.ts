import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  items: Observable<any>;
  step: number;
  response: any;
  dataSource = new MatTableDataSource();

  data = [
    { name: 'Sample 1', points: 25 },
    { name: 'Sample 2', points: 10 },
    { name: 'Sample 3', points: 35 },
    { name: 'Sample 65', points: 10 },
    { name: 'Sample 7', points: 35 },
    { name: 'Sample 9', points: 35 },
    { name: 'Sample 12', points: 10 },
    { name: 'Sample 13', points: 35 },
    { name: 'Sample 5', points: 10 },
    { name: 'Sample 17', points: 35 },
    { name: 'Sample 19', points: 35 },
    { name: 'Sample 1', points: 25 },
    { name: 'Sample 2', points: 10 },
    { name: 'Sample 3', points: 35 },
    { name: 'Sample 65', points: 10 },
    { name: 'Sample 7', points: 35 },
    { name: 'Sample 9', points: 35 },
    { name: 'Sample 12', points: 10 },
    { name: 'Sample 13', points: 35 },
    { name: 'Sample 5', points: 10 },
    { name: 'Sample 17', points: 35 },
    { name: 'Sample 19', points: 35 },
  ];
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
      this.items = this.dataSource.connect();
    });
  }
  expansionUnit(index) {
    this.step = index;
  }
}
