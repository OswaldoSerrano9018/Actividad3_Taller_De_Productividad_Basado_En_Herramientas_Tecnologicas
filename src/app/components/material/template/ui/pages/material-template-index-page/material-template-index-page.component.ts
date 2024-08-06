import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MaterialTemplateRow} from "../../../types";
import {MatPaginator} from "@angular/material/paginator";
import {BomApiConnector} from "../../../../../bom/http/BomApiConnector";
import {MaterialApiConnector} from "../../../../http/MaterialApiConnector";
import {MatAnchor, MatButton} from "@angular/material/button";

@Component({
  selector: 'app-material-template-index-page',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatAnchor,
    MatButton,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './material-template-index-page.component.html',
  styleUrl: './material-template-index-page.component.scss'
})
export class MaterialTemplateIndexPageComponent implements OnInit{

  protected displayedColumns: string[] = ["nombre", "acciones"];

  protected dataSource: MatTableDataSource<MaterialTemplateRow, MatPaginator> = new MatTableDataSource<MaterialTemplateRow, MatPaginator>([]);


  public constructor(
    private materialApiConnector: MaterialApiConnector
  ){}

  ngOnInit(): void {
        this.materialApiConnector
          .all()
          .subscribe( result => this.dataSource = new MatTableDataSource<MaterialTemplateRow, MatPaginator>(result));
  }



}
