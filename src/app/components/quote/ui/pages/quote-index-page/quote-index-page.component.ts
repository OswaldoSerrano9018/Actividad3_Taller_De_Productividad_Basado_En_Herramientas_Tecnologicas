import {Component, OnInit} from '@angular/core';
import {
  MatCellDef,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTableDataSource
} from "@angular/material/table";
import {ClientRow} from "../../../../client/types";
import {MatPaginator} from "@angular/material/paginator";
import {QuoteRow} from "../../../types";
import {QuoteApiConnector} from "../../../http/QuoteApiConnector";

@Component({
  selector: 'app-quote-index-page',
  standalone: true,
  imports: [
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './quote-index-page.component.html',
  styleUrl: './quote-index-page.component.scss'
})
export class QuoteIndexPageComponent implements OnInit{

  protected displayedColumns: string[] = ["nombre", "acciones"]
  protected dataSource : MatTableDataSource<QuoteRow, MatPaginator> = new MatTableDataSource<QuoteRow, MatPaginator>([]);

  public constructor(private quoteApiConnector: QuoteApiConnector){}

    ngOnInit(): void {
      this.quoteApiConnector
        .all()
        .subscribe((result: QuoteRow[]) => this.dataSource = new MatTableDataSource(result));
    }

}
