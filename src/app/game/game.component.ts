import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from '../model/game';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  game!: Game;
  games?: Game[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.game = new Game('');
    this.games = this.gameService.getGames();
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.gameService.isExist(this.game.name)) {
      console.log('Cadastra' + JSON.stringify(this.game));
      this.gameService.save(this.game);
    } else {
      console.log('Atualiza' + JSON.stringify(this.game));
      this.gameService.update(this.game);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.game = new Game('');
    this.games = this.gameService.getGames();
  }
}
