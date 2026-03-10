import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PERIODIC_ELEMENTS, PeriodicElement } from '../../interfaces';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-table',
  styleUrl: 'table.component.scss',
  templateUrl: 'table.component.html',
  imports: [MatButtonModule, MatIconModule, MatPaginatorModule, MatTableModule, ScrollingModule],
})
export class TableComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<PeriodicElement>(PERIODIC_ELEMENTS);
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;
  trackBy = (index: number, el: PeriodicElement) => el.position;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Checks whether an element is expanded. */
  isExpanded(element: PeriodicElement) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: PeriodicElement) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }
}
