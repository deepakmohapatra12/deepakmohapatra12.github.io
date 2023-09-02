import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
/**
 * This class transforms a data array into structured tree
 */
export class ItemNode {
    id: number;
    name: string;
    children: ItemNode[];
  
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
@Injectable()
export class TreeBuilder {
 DATA = [
        {
          id: '0',
          name: 'Group 1',
          children: [
            {
              id: 1,
              name: 'Deepak Mohapatra'
            },
            {
              id: 2,
              name: 'Arpan paik'
            },
            {
              id: 3,
              name: 'Devansh'
            },
            {
              id: 4,
              name: 'Astha'
            }
          ]
        },
        {
        
          id: '0',
          name: 'Group 2',
          children: [
            {
              id: 1,
              name: 'Deepak Mohapatra'
            },
            {
              id: 2,
              name: 'Arpan paik'
            },
            {
              id: 3,
              name: 'Devansh'
            },
            {
              id: 4,
              name: 'Astha'
            }
          ]
        }
      ]
   dataChange = new BehaviorSubject<ItemNode[]>([]);
  
  get data(): ItemNode[] { return this.dataChange.value; }
  
  constructor() {
    this.initialize();
  }

  initialize() {
    console.log(this.DATA)
    const data = this.builTree(this.DATA, 0);
    this.dataChange.next(data);
  }

  builTree(obj: any, level: number): ItemNode[] {
    return Object.keys(obj).reduce<ItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new ItemNode(value.id, value.name);
      console.log(value)
      if (value != null) {
        if (typeof value === 'object') {
          if (value.children !== undefined) {
            node.children = this.builTree(value.children, level + 1);
          }
       
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}