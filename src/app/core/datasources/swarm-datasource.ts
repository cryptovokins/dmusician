import {Injectable} from '@angular/core';

@Injectable()
export class SwarmDataSource {

  getCoversPictures(): string[] {
    const covers: string[] = Array();
    const chemical = 'https://swarm-gateways.net/bzz:/0848fae1d7cef8060bd64c084b86a7ef4194a80c4fe1caa555944a70a34168e5/';
    const circle = 'https://swarm-gateways.net/bzz:/3ad85d20f516c3e76ec246df5771e3363d5666168d9e60a326b79f3b9a4e0118/';
    const figure = 'https://swarm-gateways.net/bzz:/7b7c91660400f306c453c9fbad26a95d1fd132c8e58fd1ab7ea1c73246a6ee49/';
    const flower = 'https://swarm-gateways.net/bzz:/08e11bbe9ee13a270c99f5d95dd70b7238adb4ccd77a9eb1bda56429a95798fa/';
    const four = 'https://swarm-gateways.net/bzz:/e8448c6c6d6a5aff0180c749547a3ba98b26164e9afcd34887cba4e150701d7e/';
    const monster = 'https://swarm-gateways.net/bzz:/0847807e97b8f7fb4a666229d1873eead1455ce0646944d6d375817a92b70f72/';
    const pink = 'https://swarm-gateways.net/bzz:/a4d452eb1959f50d389f32a2ac6e953eaefd2a929566e59597eee2d20c93cb0c/';
    const tree = 'https://swarm-gateways.net/bzz:/91d14562012e59a75bbad9424e2cc8b6b28be1a6ed0e9d289cdc547ffa155639/';
    covers.push(chemical);
    covers.push(circle);
    covers.push(figure);
    covers.push(flower);
    covers.push(four);
    covers.push(monster);
    covers.push(pink);
    covers.push(tree);
    return covers;
  }

  getBannersPictures(): string[] {
    const banners: string[] = Array();
    const x = 'https://swarm-gateways.net/bzz:/9a7d2736f8f27bf5dee83315ce8770849ee44578c8f0d0a28cd7359456370c39/';
    const aragon = 'https://swarm-gateways.net/bzz:/aafa254a537e74487adcb7bff8513c21608e711743f83c6b6f64fba1a07558bc/';
    const augur = 'https://swarm-gateways.net/bzz:/10ac8ae96c5664b4d1668f1b291d57213fe6a226ccfd57606c29a0bae217cfcf/';
    const consensys = 'https://swarm-gateways.net/bzz:/23ec8a37d640fe659a3c06886132071fb917597d64451b62829768161850c0aa/';
    const ethereum = 'https://swarm-gateways.net/bzz:/d48fa5707f6aedea1d8f22f5dc2bf356d9db553ae6d05fe84465f17728b8ad55/';
    const loom = 'https://swarm-gateways.net/bzz:/62115fe7edd4854a2714b55912b4f6a3a9ffa8876e6b9ccbe0798b0920e3dacb/';
    const parity = 'https://swarm-gateways.net/bzz:/338d952661c4737ac098cfed896733fd1042ced3716db8b08255f839ff79001d/';
    const swarm = 'https://swarm-gateways.net/bzz:/31eca8a63e996077be8d4b823728463f9575edbd89747425646edaa45e527335/';
    banners.push(x);
    banners.push(aragon);
    banners.push(augur);
    banners.push(consensys);
    banners.push(ethereum);
    banners.push(loom);
    banners.push(parity);
    banners.push(swarm);
    return banners;
  }

  getMusicTracks(): string[] {
    const tracks: string[] = Array();
    const world = 'https://swarm-gateways.net/bzz:/b2d6ee8bd6b5b8442bebf6a499c565d00614464614a3c85f0e6df0cb54a71cbc/';
    const river = 'https://swarm-gateways.net/bzz:/8f6b7c43cf5dfc87c6ba4f6a927bb68812c3280bb785577be623f6c0439aeae6/';
    const party = 'https://swarm-gateways.net/bzz:/81bf37fa67315d29fc75d807fbfb67bcdcf2a4b50c597755ebd3930acc8849b4/';
    const fresh = 'https://swarm-gateways.net/bzz:/6f21985324a6758033203cdeaf75699f9414b96edca0e1fb60bb4f3096698faf/';
    const start = 'https://swarm-gateways.net/bzz:/c92dc6240635bef31dfe9c013778dfcad1d8405ba2fdad63af60762be81a843f/';
    const something = 'https://swarm-gateways.net/bzz:/769a692c18d0ce575f98b3f1585fd7abc6409123d8168e7e806758035d901328/';
    const summer = 'https://swarm-gateways.net/bzz:/75e23c1f552603019642a20b3af6832347638be81d2c975b3bcf475d21cddf6f/';
    const street = 'https://swarm-gateways.net/bzz:/175dadddd5b959d4375c1d4cd368e9373110ec03b6ca72e1259c53c3131ca687/';
    const kick = 'https://swarm-gateways.net/bzz:/a39c89a2f23c632a49db30492c5d6390d5ae5b4d4b0ba8c939b0899290d136d3/';
    const spirit = 'https://swarm-gateways.net/bzz:/b0c639e91ded7cb7a96929d2bfb9e8587083b7e6281790c498c0842b632c1f5f/';
    tracks.push(world);
    tracks.push(river);
    tracks.push(party);
    tracks.push(fresh);
    tracks.push(start);
    tracks.push(something);
    tracks.push(summer);
    tracks.push(street);
    tracks.push(kick);
    tracks.push(spirit);
    return tracks;
  }

}
