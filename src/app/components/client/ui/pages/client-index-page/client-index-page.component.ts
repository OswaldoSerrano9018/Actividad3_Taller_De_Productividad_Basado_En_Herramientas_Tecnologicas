import {Component, OnInit} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {ClientApiConnector} from "../../../http/ClientApiConnector";
import {ClientRow} from "../../../types";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-client-index-page',
  standalone: true,
  imports: [
    MatAnchor,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatButton,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './client-index-page.component.html',
  styleUrl: './client-index-page.component.scss'
})
export class ClientIndexPageComponent implements OnInit{

  protected displayedColumns: string[] = ["nombre", "acciones"]
  protected dataSource : MatTableDataSource<ClientRow, MatPaginator> = new MatTableDataSource<ClientRow, MatPaginator>([]);

  public constructor(private clientApiConnector: ClientApiConnector){}

  ngOnInit(): void {
    this.clientApiConnector
      .all()
      .subscribe( (result: ClientRow[]) => {
        this.dataSource = new MatTableDataSource(result);
      });
  }


}
