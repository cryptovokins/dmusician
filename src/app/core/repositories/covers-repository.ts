import { Images } from './../../entities/images';
import {Injectable} from '@angular/core';
import { SwarmDataSource } from '../datasources';

@Injectable()
export class CoversRepository {

  constructor(
    private swarmDataSource: SwarmDataSource
  ) { }

  getCovers(): Images[] {
    let covers: string[] = Array();
    covers = this.swarmDataSource.getCoversPictures()
    covers.map(item => new Image(item));


    return null;
  }

}
