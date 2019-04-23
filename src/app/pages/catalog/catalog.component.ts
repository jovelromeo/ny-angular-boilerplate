import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CatalogDataSource } from './catalog-datasource';
import { ProductsService } from 'src/app/services/catalog/products.service';
import { IProduct } from 'src/app/interfaces/product';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CatalogDataSource;
  selected;
  value;
  searchByDesc=true;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns =[
    // "idItem",
        "agregar",
        "grupo",
        "descripcion",
        "marca",
        "vehiculo",
        // "descripcion2",
        "stock",
        // "scanner",
        "venta",
        "pvp",
      ];

  constructor(private productsService:ProductsService){ 
  }

  ngOnInit() {
    this.getAllProducts();
    this.dataSource = new CatalogDataSource(this.paginator, this.sort);
  }
  public getAllProducts = () => {
    this.productsService.getProducts("","","")
    .subscribe(data => {
      this.dataSource = new CatalogDataSource(this.paginator, this.sort);
      this.dataSource.data = data;
    })
    // this.patientService.getPatients().subscribe((data) => {
    //   this.patients = data;
    //   console.log('#####patients inside ngonit', this.patients);
    //   this.dataSource = new MatTableDataSource(this.patients);
    // });
  }
  addToChart(id){
    console.log("id: "+id);
  }
}
