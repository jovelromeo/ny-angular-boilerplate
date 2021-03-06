import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CatalogDataSource } from './catalog-datasource';
import { ProductsService } from 'src/app/services/catalog/products.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CatalogDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private productsService:ProductsService){ }

  ngOnInit() {
    this.getAllProducts();
    this.dataSource = new CatalogDataSource(this.paginator, this.sort);
  }
  public getAllProducts = () => {
    this.productsService.getProducts('api/owner',"","")
    .subscribe(res => {
      this.dataSource.data = res as IProduct[];
    })
  }
}
