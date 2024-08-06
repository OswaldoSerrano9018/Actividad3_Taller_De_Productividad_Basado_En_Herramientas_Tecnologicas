import {Component, OnInit} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {OrderApiConnector} from "../../../http/OrderApiConnector";
import {OrderRow} from "../../../types";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-order-index-page',
  standalone: true,
  imports: [
    MatAnchor,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatButton,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './order-index-page.component.html',
  styleUrl: './order-index-page.component.scss'
})
export class OrderIndexPageComponent implements OnInit{


    protected displayedColumns: string[] = ["folio", "acciones"];

    protected dataSource: MatTableDataSource<OrderRow, MatPaginator> = new MatTableDataSource<OrderRow, MatPaginator>([]);

    public constructor(private orderApiConnector: OrderApiConnector) {
    }

  ngOnInit(): void {
      this.orderApiConnector
        .all()
        .subscribe( (result: OrderRow[]) => this.dataSource = new MatTableDataSource(result) );
  }

}
