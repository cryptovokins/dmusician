import { Images } from '../../entities/images';
import {Injectable} from '@angular/core';
import { SwarmDataSource } from '../datasources/swarm-datasource';


@Injectable()
export class CoversRepoService {

  constructor(
    private swarmDataSource: SwarmDataSource
  ) { }

  getCovers(startIndex: number, length: number): Images[] {
   let end = startIndex + length;
   const images = this.swarmDataSource.getCoversPictures()
        .map((url: string, index: number) => ({
            id: index,
            img: url
        }));
    if ((startIndex > images.length) || (startIndex < 0)) {
      return null;
    }
    if (end > images.length) {
      end = images.length;
    }
    return images.slice(startIndex, end);
  }

}
