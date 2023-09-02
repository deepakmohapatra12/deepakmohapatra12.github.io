import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { MatIconModule } from "@angular/material/icon";
import  { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource } from "@angular/material/tree";
import { SelectionModel } from '@angular/cdk/collections';
import {FlatTreeControl } from '@angular/cdk/tree';

import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import { ItemFlatNode } from '../models/ItemFlatNode.model';
import { ItemNode, TreeBuilder } from './tree-builder';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-my-survey',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    SurveyCreatorModule,
    NgbNavModule,
    RouterModule,
    MatTreeModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [TreeBuilder],
  templateUrl: './my-survey.component.html',
  styleUrls: ['./my-survey.component.scss']
})
export default class MySurveyComponent implements OnInit {
  active = 1;
  private idCounter: number = 0;
  public tabs: any[] = [];
  treeControl: FlatTreeControl<ItemFlatNode>;
  treeFlattener: MatTreeFlattener<ItemNode, ItemFlatNode>;
  dataSource: MatTreeFlatDataSource<ItemNode, ItemFlatNode>;
 /** The selection for checklist */
  checklistSelection = new SelectionModel<ItemFlatNode>(true /* multiple */);
   /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<ItemFlatNode, ItemNode>();

  constructor(database: TreeBuilder, private modalService: NgbModal,
    private router: Router) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<ItemFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    database.dataChange.subscribe(data => this.dataSource.data = data);
  }

  transformer = (node: ItemNode, level: number) => {
    return new ItemFlatNode(!!node.children, node.id, node.name, level);
  }

  private _getLevel = (node: ItemFlatNode) => node.level;

  private _isExpandable = (node: ItemFlatNode) => node.expandable;

  private _getChildren = (node: ItemNode): Observable<ItemNode[]> => observableOf(node.children);

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: ItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    console.log(this.checklistSelection)
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: ItemFlatNode): boolean {
    console.log(node);
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: ItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
      console.log(node);
  }

  hasChild = (_: number, _nodeData: ItemFlatNode) => _nodeData.expandable;

  share(modal) {
    this.modalService.open(modal, {size: 'lg', windowClass: 'modal-xl'}).result.then(
      (result) => {},
      (reason) => {}
    );
  }

  ngOnInit(): void {
    this.onAddTabClick();
  }

  public navigateToSurveyDetails(): void {
    console.log('coming here');
    this.router.navigate(['/my-survey-details']);
  }
  public onAddTabClick(): void {
    ++this.idCounter;

    this.tabs = this.tabs.concat({
      id: this.idCounter,
      title: 'Tab ' + this.idCounter
    });
  }
}
