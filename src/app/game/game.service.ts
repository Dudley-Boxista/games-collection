import { Injectable } from '@angular/core';
import { Game } from '../model/game';
import { WebStorageUtil } from '../util/WebStorageUtil';

@Injectable({
  providedIn: 'root',
})

export class GameService {
  games!: Game[];

  constructor() {
    this.games = WebStorageUtil.get('games') || [];
  }

  save(game: Game) {
    this.games = WebStorageUtil.get('games') || [];
    this.games.push(game);
    WebStorageUtil.set('games', this.games);
  }

  update(game: Game) {
    this.games = WebStorageUtil.get('games') || [];
    this.delete(game.name);
    this.save(game);
  }

  delete(name: string): boolean {
    this.games = WebStorageUtil.get('games') || [];
    this.games = this.games.filter((g) => {
      return g.name?.valueOf() != name?.valueOf();
    });

    WebStorageUtil.set('games', this.games);
    return true;
  }

  isExist(value: string): boolean {
    let exist = false;
    this.games = WebStorageUtil.get('games') || [];
    this.games.forEach(game => {
      if (game.name?.valueOf() == value?.valueOf()) {
        exist = true;
      }
    })
    return exist;
  }


  getGames(): Game[] {
    this.games = WebStorageUtil.get('games') || [];
    return this.games;
  }

}