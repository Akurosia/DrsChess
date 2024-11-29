import { Component, Input, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Unsubscriber } from '../core/unsubscriber';
import { Player } from '../domain/player.model';
import { Tile } from '../domain/tile';

@Component({
  selector: 'drs-tile',
  styleUrls: ['./tile.component.scss'],
  templateUrl: './tile.component.html',
})
export class TileComponent extends Unsubscriber implements OnInit {
  @Input() tile: Tile;

  player: Player;
  color: string;
  imgsrc: string;
  hasPlayer: boolean;

  animationClass = 'normal';

  constructor(private appService: AppService) {
    super();
  }

  ngOnInit() {
    this.color = this.tile.color;
    switch (this.tile.speedMultiplier) {
      case 1:
        this.animationClass = 'normal';
        break;
      case 2:
        this.animationClass = 'fast';
        break;
      case 3:
        this.animationClass = 'fastest';
        break;
      default:
        this.animationClass = 'slow';
    }
    this.appService.player
      .pipe(
        tap((player) => (this.player = player)),
        switchMap((player) =>
          combineLatest([player.playerPosition, player.startingPosition])
        ),
        takeUntil(this.onDestroy$)
      )
      .subscribe((player) => {
        const playerCoords = player[0];
        const startingCoords = player[1];

        this.hasPlayer =
          this.tile.row === playerCoords.row &&
          this.tile.col === playerCoords.col;

        this.color =
          this.tile.row === startingCoords.row &&
          this.tile.col === startingCoords.col
            ? 'yellow'
            : this.tile.color;

        this.imgsrc =
          this.tile.row === 3 && this.tile.col === 0
            ? "assets/061248_hr1.png"
            : this.tile.row === 4 && this.tile.col === 1
            ? "assets/061246_hr1.png"
            : this.tile.row === 3 && this.tile.col === 2
            ? "assets/061243_hr1.png"
            : this.tile.row === 2 && this.tile.col === 1
            ? "assets/061247_hr1.png"
            : this.tile.row === 2 && this.tile.col === 3
            ? "assets/061242_hr1.png"
            : this.tile.row === 1 && this.tile.col === 2
            ? "assets/061241_hr1.png"
            : this.tile.row === 1 && this.tile.col === 4
            ? "assets/061245_hr1.png"
            : this.tile.row === 0 && this.tile.col === 3
            ? "assets/061244_hr1.png"
            : "";
      });
  }

  public onClick(): void {
    this.appService.onClick(this.tile);
  }
}
