import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatAnchor, MatButton} from "@angular/material/button";
import {BomApiConnector} from "../../../http/BomApiConnector";
import {BomModelView} from "../../../types";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-bom-index-page',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatCell,
    MatButton,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatAnchor
  ],
  templateUrl: './bom-index-page.component.html',
  styleUrl: './bom-index-page.component.scss'
})
export class BomIndexPageComponent implements OnInit{

  protected displayedColumns: string[] = ["folio", "acciones"];

  public constructor(private bomApiConnector: BomApiConnector) {}

  protected dataSource: MatTableDataSource<BomModelView, MatPaginator> = new MatTableDataSource<BomModelView, MatPaginator>([]);

  ngOnInit(): void {

     this.bomApiConnector
       .all()
       .subscribe((boms: BomModelView[]) => {
         this.dataSource = new MatTableDataSource(boms);
       });

  }

}
