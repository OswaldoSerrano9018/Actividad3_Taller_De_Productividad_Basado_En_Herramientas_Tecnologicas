import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef, MatColumnDef, MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatAnchor, MatButton} from "@angular/material/button";
import {ClientRow} from "../../../../client/types";
import {MatPaginator} from "@angular/material/paginator";
import {ProductRow} from "../../../types";
import {ProductApiConnector} from "../../../http/ProductApiConnector";

@Component({
  selector: 'app-product-index-page',
  standalone: true,
  imports: [
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
    MatAnchor,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatButton
  ],
  templateUrl: './product-index-page.component.html',
  styleUrl: './product-index-page.component.scss'
})
export class ProductIndexPageComponent implements OnInit{

    protected displayedColumns: string[] = ["nombre", "acciones"];
    protected dataSource : MatTableDataSource<ProductRow, MatPaginator> = new MatTableDataSource<ProductRow, MatPaginator>([]);

    public constructor(private productApiConnector: ProductApiConnector){}

    ngOnInit(): void {
        this.productApiConnector
          .all()
          .subscribe( (result: ProductRow[]) => this.dataSource = new MatTableDataSource(result));
    }

}
