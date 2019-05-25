import { Images } from '../../entities/images';
import {Injectable} from '@angular/core';
import { SwarmDataSource } from '../datasources/swarm-datasource';


@Injectable()
export class CoversRepoService {

  constructor(
    private swarmDataSource: SwarmDataSource
  ) { }

  getCovers(): Images[] {
  return this.swarmDataSource.getCoversPictures()
        .map((url: string, index: number) => ({
            id: index,
            img: url
        }));
  }

}
