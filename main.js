(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/DrsChess/DrsChess/src/main.ts */"zUnb");


/***/ }),

/***/ "1a7w":
/*!****************************************!*\
  !*** ./src/app/dots/dots.component.ts ***!
  \****************************************/
/*! exports provided: DotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotsComponent", function() { return DotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function DotsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function DotsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function DotsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function DotsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
class DotsComponent {
}
DotsComponent.ɵfac = function DotsComponent_Factory(t) { return new (t || DotsComponent)(); };
DotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DotsComponent, selectors: [["drs-dots"]], inputs: { dotCount: "dotCount" }, decls: 7, vars: 4, consts: [[1, "drs-table"], [1, "drs-row"], ["class", "drs-dot", 4, "ngIf"], [1, "drs-dot"]], template: function DotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DotsComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DotsComponent_div_3_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DotsComponent_div_5_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DotsComponent_div_6_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dotCount >= 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dotCount >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dotCount >= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dotCount >= 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".drs-dot[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  background-color: red;\n  border-radius: 50%;\n  display: table-cell;\n  z-index: 9999;\n}\n\n.drs-table[_ngcontent-%COMP%] {\n  display: inline-grid;\n  height: 50px;\n  width: 50px;\n  z-index: 9999;\n}\n\n.drs-row[_ngcontent-%COMP%] {\n  height: 25px;\n  display: table-row;\n  text-align: center;\n  margin: 0 auto;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RvdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiZG90cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcnMtZG90IHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5kcnMtdGFibGUge1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmRycy1yb3cge1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogOTk5OTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AqEb":
/*!****************************************!*\
  !*** ./src/app/domain/coords.model.ts ***!
  \****************************************/
/*! exports provided: Coords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coords", function() { return Coords; });
class Coords {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_unsubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/unsubscriber */ "tePZ");
/* harmony import */ var _domain_direction_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/direction.enum */ "MNfU");
/* harmony import */ var _domain_knight_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain/knight.model */ "xxy2");
/* harmony import */ var _domain_player_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain/player.model */ "lFD5");
/* harmony import */ var _domain_tile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain/tile */ "nGYG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppService extends _core_unsubscriber__WEBPACK_IMPORTED_MODULE_2__["Unsubscriber"] {
    constructor() {
        super();
        this.start = 23;
        this.tiles$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.knights$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.player$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.playerMoves$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this._player = new _domain_player_model__WEBPACK_IMPORTED_MODULE_5__["Player"]();
        this._player.setPlayerPosition(2, 2);
        this._player.setStartingPosition(-1, -1);
        this._player.playerPosition
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.onDestroy$))
            .subscribe((pos) => (this.playerPosition = pos));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => !event.repeat))
            .subscribe((event) => {
            if (this.playerMoveAllowed) {
                this._player.move(event.code);
            }
        });
        this.player$.next(this._player);
        this.resetBoard(1);
    }
    get tiles() {
        return this.tiles$.asObservable();
    }
    get knights() {
        return this.knights$.asObservable();
    }
    get player() {
        return this.player$.asObservable();
    }
    get playerMoves() {
        return this.playerMoves$.asObservable();
    }
    onClick(tile) {
        if (!this.playerMoveAllowed) {
            return;
        }
        this._player.setPlayerPosition(tile.row, tile.col);
    }
    startGame(component, speedMultiplier) {
        this.playerMoveAllowed = false;
        this.resetBoard(speedMultiplier);
        this.setupGame();
        const kill$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.playerMoveAllowed = true;
        this.skipTicks = 0;
        this.ticksSinceStart = 0;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000 / speedMultiplier).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(kill$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((v) => {
            if (this.skipTicks === 0) {
                this.ticksSinceStart = v;
            }
            else {
                v += this.skipTicks;
            }
            return v;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((v) => {
            // Time before the first debuff ends (23 seconds)
            if (v < this.start) {
                component.setStatusText(`Find your starting position! Seconds left: ${this.start - v}`);
            }
            // The first knights move
            if (v === this.start - 2) {
                if (this.playerPosition.row === 2 && this.playerPosition.col === 2) {
                    // player did not click, shower slimes on them
                    this.stopGame(kill$, speedMultiplier);
                    component.setStatusText(`You did not choose a starting location. DOOM.`);
                    return;
                }
                component.setStatusText(`Moving North and South`);
                this.knightS.move();
                this.knightN.move();
                return;
            }
            // Time to move the first steps (10 seconds)
            if (v >= this.start && v < this.start + 10) {
                // The rows explode
                if (v === this.start) {
                    this.setRowExplosions(speedMultiplier);
                    if (this.playerPosition.row === this.knightS.target) {
                        component.setStatusText(`Explosion: The row you are on was hit by the knight walking south!! DOOOM`);
                        this.stopGame(kill$, speedMultiplier);
                        return;
                    }
                    if (this.playerPosition.row === this.knightN.target) {
                        component.setStatusText(`Explosion: The row you are on was hit by the knight walking north!! DOOOM`);
                        this.stopGame(kill$, speedMultiplier);
                        return;
                    }
                    component.setStatusText(`Explosion! You are safe!`);
                    this._player.steps = this._playerMoves[0];
                    this._player.setStartingPosition(this.playerPosition.row, this.playerPosition.col);
                }
                component.setStatusText(`Move your first amount of steps (${this._playerMoves[0]})! Seconds left: ${10 + (this.start - v)}`);
                return;
            }
            // The second knights move
            if (v === this.start + 10) {
                this.playerMoveAllowed = false;
                if (this._player.remainingSteps !== 0) {
                    component.setStatusText(`You did not move the required amount of steps! DOOOOOOM!!!`);
                    this.stopGame(kill$, speedMultiplier);
                    return;
                }
                this._player.steps = 0;
                this._player.setStartingPosition(-1, -1);
                component.setStatusText(`Moving East and West`);
                this.knightE.move();
                this.knightW.move();
                return;
            }
            // The columns explode
            if (v === this.start + 12) {
                this.setColExplosions(speedMultiplier);
                if (this.playerPosition.col === this.knightE.target) {
                    component.setStatusText(`Explosion: The column you are on was hit by the knight walking east!! DOOOM`);
                    this.stopGame(kill$, speedMultiplier);
                    return;
                }
                if (this.playerPosition.col === this.knightW.target) {
                    component.setStatusText(`Explosion: The column you are on was hit by the knight walking west!! DOOOM`);
                    this.stopGame(kill$, speedMultiplier);
                    return;
                }
                component.setStatusText(`Explosion! You are safe!`);
                return;
            }
            // Time to move the second steps (9 seconds)
            if (v >= this.start + 16 && v < this.start + 25) {
                this.playerMoveAllowed = true;
                if (v === this.start + 16) {
                    this._player.steps = this._playerMoves[1];
                    this._player.setStartingPosition(this.playerPosition.row, this.playerPosition.col);
                }
                component.setStatusText(`Move your second amount of steps (${this._playerMoves[1]})! Seconds left: ${8 + (this.start + 16 - v)}`);
                return;
            }
            if (v === this.start + 25) {
                this.playerMoveAllowed = false;
                if (this._player.remainingSteps !== 0) {
                    component.setStatusText(`You did not move the required amount of steps! DOOOOOOM!!!`);
                    this.stopGame(kill$, speedMultiplier);
                    return;
                }
                this._player.steps = 0;
                this._player.setStartingPosition(-1, -1);
                if (this.playerPosition.col !== 2 || this.playerPosition.row !== 0) {
                    component.setStatusText(`You did not reach the target tile. DOOOOOM`);
                    this.stopGame(kill$, speedMultiplier);
                }
                else {
                    component.setStatusText(`You reached the goal in time without getting hit. Good job!`);
                    component.showGreenSlime = true;
                    this.stopGame(kill$, speedMultiplier, false);
                }
            }
        }));
    }
    skipToFirstMechanic() {
        this.skipTicks = Math.max(this.start - this.ticksSinceStart - 3, 0);
    }
    setupGame() {
        const position = Math.round(Math.random());
        let steps = this.generate2DifferentRandomNumbers(1, 3);
        this.knightW.init(position, steps[0]);
        this.knightE.init((position + 1) % 2, steps[1]);
        steps = this.generate2DifferentRandomNumbers(1, 3);
        this.knightS.init(position, steps[0]);
        this.knightN.init((position + 1) % 2, steps[1]);
        this._playerMoves = this.generate2DifferentRandomNumbers(2, 4);
        this.playerMoves$.next(this._playerMoves);
        this._player.setPlayerPosition(2, 2);
    }
    generate2DifferentRandomNumbers(from, to) {
        const numbers = Array.from({ length: to - from + 1 }, (_, i) => i + from);
        let index = this.randomIntFromInterval(0, numbers.length - 1);
        const n1 = numbers[index];
        numbers.splice(index, 1);
        index = this.randomIntFromInterval(0, numbers.length - 1);
        const n2 = numbers[index];
        return [n1, n2];
    }
    resetBoard(speedMultiplier) {
        this.knightW = new _domain_knight_model__WEBPACK_IMPORTED_MODULE_4__["Knight"](_domain_direction_enum__WEBPACK_IMPORTED_MODULE_3__["Direction"].W);
        this.knightN = new _domain_knight_model__WEBPACK_IMPORTED_MODULE_4__["Knight"](_domain_direction_enum__WEBPACK_IMPORTED_MODULE_3__["Direction"].N);
        this.knightE = new _domain_knight_model__WEBPACK_IMPORTED_MODULE_4__["Knight"](_domain_direction_enum__WEBPACK_IMPORTED_MODULE_3__["Direction"].E);
        this.knightS = new _domain_knight_model__WEBPACK_IMPORTED_MODULE_4__["Knight"](_domain_direction_enum__WEBPACK_IMPORTED_MODULE_3__["Direction"].S);
        this.knightE.speedMultiplier = speedMultiplier;
        this.knightS.speedMultiplier = speedMultiplier;
        this.knightW.speedMultiplier = speedMultiplier;
        this.knightN.speedMultiplier = speedMultiplier;
        this._player.failed = false;
        this.knights$.next([
            this.knightW,
            this.knightN,
            this.knightE,
            this.knightS,
        ]);
        const tiles = [];
        for (let row = 0; row < 5; row++) {
            tiles.push([]);
            for (let col = 0; col < 5; col++) {
                tiles[row].push(new _domain_tile__WEBPACK_IMPORTED_MODULE_6__["Tile"](row, col, speedMultiplier));
            }
        }
        this._player.setStartingPosition(-1, -1);
        this._player.steps = 0;
        this._tiles = tiles;
        this.tiles$.next(tiles);
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    stopGame(kill$, speedMultiplier, failed = true) {
        kill$.next();
        kill$.complete();
        this.playerMoveAllowed = false;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000 / speedMultiplier)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(() => {
            this.knightN.ready = false;
            this.knightE.ready = false;
            this.knightS.ready = false;
            this.knightW.ready = false;
            this._player.failed = failed;
        });
    }
    setRowExplosions(speedMultiplier) {
        for (let row = 0; row < this._tiles.length; row++) {
            this._tiles[row].forEach((tile) => {
                tile.explodingRow =
                    this.knightN.target === row || this.knightS.target === row;
            });
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000 / speedMultiplier)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(() => {
            this._tiles.forEach((row) => row.forEach((tile) => (tile.explodingRow = false)));
        });
    }
    setColExplosions(speedMultiplier) {
        this._tiles.forEach((row) => {
            for (let col = 0; col < row.length; col++) {
                row[col].explodingCol =
                    this.knightE.target === col || this.knightW.target === col;
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000 / speedMultiplier)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(() => {
            this._tiles.forEach((row) => row.forEach((tile) => (tile.explodingCol = false)));
        });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H9aC":
/*!****************************************!*\
  !*** ./src/app/tile/tile.component.ts ***!
  \****************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_unsubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/unsubscriber */ "tePZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dots_dots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dots/dots.component */ "1a7w");







function TileComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.imgsrc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function TileComponent_div_0_div_2_drs_dots_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "drs-dots", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dotCount", ctx_r3.player.remainingSteps);
} }
function TileComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TileComponent_div_0_div_2_drs_dots_1_Template, 1, 1, "drs-dots", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.player.remainingSteps > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.player.failed ? "assets/RedSlime.png" : "assets/WoL.PNG", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1) { return { "background-color": a0, "border-color": a1 }; };
function TileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TileComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TileComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TileComponent_div_0_div_2_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c0, ctx_r0.color, ctx_r0.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.imgsrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.hasPlayer);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.tile.explodingRow ? ctx_r0.animationClass + " visible" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.tile.explodingCol ? ctx_r0.animationClass + " visible" : "");
} }
class TileComponent extends _core_unsubscriber__WEBPACK_IMPORTED_MODULE_2__["Unsubscriber"] {
    constructor(appService) {
        super();
        this.appService = appService;
        this.animationClass = 'normal';
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((player) => (this.player = player)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((player) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([player.playerPosition, player.startingPosition])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.onDestroy$))
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
    onClick() {
        this.appService.onClick(this.tile);
    }
}
TileComponent.ɵfac = function TileComponent_Factory(t) { return new (t || TileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"])); };
TileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TileComponent, selectors: [["drs-tile"]], inputs: { tile: "tile" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "tile-div", 3, "ngStyle", "click", 4, "ngIf"], [1, "tile-div", 3, "ngStyle", "click"], ["class", "tile-player", 4, "ngIf"], [1, "tile-row-explosion", 3, "ngClass"], [1, "tile-col-explosion", 3, "ngClass"], [1, "tile-player"], [1, "drs-wol-image", 3, "src"], ["class", "drs-dots", 3, "dotCount", 4, "ngIf"], [1, "drs-dots", 3, "dotCount"]], template: function TileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TileComponent_div_0_Template, 5, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _dots_dots_component__WEBPACK_IMPORTED_MODULE_6__["DotsComponent"]], styles: [".tile-div[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  max-height: 140px;\n  max-width: 140px;\n  border: 1px solid;\n  position: relative;\n}\n\n.tile-player[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  left: 50px;\n  top: 50px;\n}\n\n.tile-highlight[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.drs-wol-image[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 120px;\n  top: -40px;\n  left: -32px;\n  z-index: 950;\n}\n\n.drs-dots[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n\n.tile-row-explosion[_ngcontent-%COMP%] {\n  background-color: red;\n  height: 80px;\n  width: 142px;\n  position: absolute;\n  left: -1px;\n  top: 35px;\n  opacity: 0;\n}\n\n.tile-col-explosion[_ngcontent-%COMP%] {\n  background-color: red;\n  height: 142px;\n  width: 80px;\n  position: absolute;\n  top: -1px;\n  left: 35px;\n  opacity: 0;\n}\n\n.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation-name: fadeIn;\n  -webkit-animation-name: fadeIn;\n  visibility: visible !important;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-timing-function: ease-in-out;\n}\n\n.slow[_ngcontent-%COMP%] {\n  animation-duration: 3s;\n  -webkit-animation-duration: 3s;\n}\n\n.normal[_ngcontent-%COMP%] {\n  animation-duration: 1.5s;\n  -webkit-animation-duration: 1.5s;\n}\n\n.fast[_ngcontent-%COMP%] {\n  animation-duration: 0.75s;\n  -webkit-animation-duration: 0.75s;\n}\n\n.fastest[_ngcontent-%COMP%] {\n  animation-duration: 0.5s;\n  -webkit-animation-duration: 0.5s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 0.8;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsVUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxVQUFBO0VBREY7RUFHQTtJQUNFLFlBQUE7RUFERjtFQUdBO0lBQ0UsVUFBQTtFQURGO0VBR0E7SUFDRSxVQUFBO0VBREY7QUFDRiIsImZpbGUiOiJ0aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbGUtZGl2IHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXgtaGVpZ2h0OiAxNDBweDtcbiAgbWF4LXdpZHRoOiAxNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbGUtcGxheWVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MHB4O1xuICB0b3A6IDUwcHg7XG59XG5cbi50aWxlLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLmRycy13b2wtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTIwcHg7XG4gIHRvcDogLTQwcHg7XG4gIGxlZnQ6IC0zMnB4O1xuICB6LWluZGV4OiA5NTA7XG59XG5cbi5kcnMtZG90cyB7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnRpbGUtcm93LWV4cGxvc2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTQycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAzNXB4O1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi50aWxlLWNvbC1leHBsb3Npb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogMTQycHg7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogMzVweDtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4udmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLnNsb3cge1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG59XG5cbi5ub3JtYWwge1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xufVxuXG4uZmFzdCB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcbn1cblxuLmZhc3Rlc3Qge1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "MNfU":
/*!******************************************!*\
  !*** ./src/app/domain/direction.enum.ts ***!
  \******************************************/
/*! exports provided: Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
var Direction;
(function (Direction) {
    Direction[Direction["W"] = 0] = "W";
    Direction[Direction["N"] = 1] = "N";
    Direction[Direction["E"] = 2] = "E";
    Direction[Direction["S"] = 3] = "S";
})(Direction || (Direction = {}));


/***/ }),

/***/ "OZhs":
/*!******************************************!*\
  !*** ./src/app/domain/position.model.ts ***!
  \******************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
class Position {
    constructor(top, left) {
        this.top = top;
        this.left = left;
    }
    get topPx() {
        return this.top + 'px';
    }
    get leftPx() {
        return this.left + 'px';
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_unsubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/unsubscriber */ "tePZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "F5nt");




function AppComponent_div_1_div_1_drs_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "drs-tile", 17);
} if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tile", col_r12);
} }
function AppComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_div_1_drs_tile_1_Template, 1, 1, "drs-tile", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", row_r10);
} }
const _c0 = function (a0, a1) { return { top: a0, left: a1 }; };
function AppComponent_div_1_drs_knight_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "drs-knight", 18);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("knight", ctx_r6.knightW)("ngClass", ctx_r6.animateClass)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx_r6.knightW.position.topPx, ctx_r6.knightW.position.leftPx));
} }
function AppComponent_div_1_drs_knight_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "drs-knight", 18);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("knight", ctx_r7.knightN)("ngClass", ctx_r7.animateClass)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx_r7.knightN.position.topPx, ctx_r7.knightN.position.leftPx));
} }
function AppComponent_div_1_drs_knight_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "drs-knight", 18);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("knight", ctx_r8.knightE)("ngClass", ctx_r8.animateClass)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx_r8.knightE.position.topPx, ctx_r8.knightE.position.leftPx));
} }
function AppComponent_div_1_drs_knight_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "drs-knight", 18);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("knight", ctx_r9.knightS)("ngClass", ctx_r9.animateClass)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx_r9.knightS.position.topPx, ctx_r9.knightS.position.leftPx));
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_1_drs_knight_2_Template, 1, 6, "drs-knight", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_1_drs_knight_3_Template, 1, 6, "drs-knight", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_div_1_drs_knight_4_Template, 1, 6, "drs-knight", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_div_1_drs_knight_5_Template, 1, 6, "drs-knight", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.tiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.knightW == null ? null : ctx_r0.knightW.ready);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.knightN == null ? null : ctx_r0.knightN.ready);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.knightE == null ? null : ctx_r0.knightE.ready);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.knightS == null ? null : ctx_r0.knightS.ready);
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Start Game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Speed: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_div_6_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.setSpeedMultiplier($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "50%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "200%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "300%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.speedMultiplier);
} }
function AppComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.skipToFirstMechanic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Skip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 28);
} }
function AppComponent_div_17_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r18.imageSrc1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_17_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r19.moveSrc1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_17_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r20.imageSrc2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_17_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r21.moveSrc2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_17_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r22.stunSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_17_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r23.debuff1Duration, " ");
} }
const _c1 = function (a0) { return { left: a0 }; };
function AppComponent_div_17_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r24.showDebuff1 || ctx_r24.showMove1 ? "26px" : "1.5px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r24.debuff2Duration, " ");
} }
function AppComponent_div_17_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r25.showDebuff1 || ctx_r25.showMove1 ? "46px" : "26px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.stunDuration, " ");
} }
function AppComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_17_img_2_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_17_img_3_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_div_17_img_4_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_div_17_img_5_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_div_17_img_6_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_div_17_div_7_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppComponent_div_17_div_8_Template, 2, 4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AppComponent_div_17_div_9_Template, 2, 4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.showDebuff1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.showMove1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.showDebuff2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.showMove2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.stunDuration >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.showDebuff1 || ctx_r4.showMove1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.showDebuff2 || ctx_r4.showMove2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.stunDuration >= 0);
} }
class AppComponent extends _core_unsubscriber__WEBPACK_IMPORTED_MODULE_1__["Unsubscriber"] {
    constructor(appService) {
        super();
        this.appService = appService;
        this.title = 'DrsChess';
        this.stunSrc = 'assets/Stun.png';
        this.showDebuff1 = true;
        this.showDebuff2 = true;
        this.speedMultiplier = 1;
        this.animateClass = 'drs-animate-normal';
        this.appService.tiles
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.onDestroy$))
            .subscribe((tiles) => (this.tiles = tiles));
        this.appService.knights
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.onDestroy$))
            .subscribe((knights) => {
            this.knightW = knights[0];
            this.knightN = knights[1];
            this.knightE = knights[2];
            this.knightS = knights[3];
        });
        this.appService.playerMoves
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.onDestroy$))
            .subscribe((moves) => this.setPlayerMoves(moves));
    }
    startGame() {
        this.showMove1 = false;
        this.showMove2 = false;
        this.showGreenSlime = false;
        if (this.running) {
            return;
        }
        this.running = true;
        this.appService.startGame(this, this.speedMultiplier).subscribe((v) => {
            this.skippable = v < 23;
            this.debuff1Duration =
                v <= 23 ? Math.max(0, 23 - v) : Math.max(0, 33 - v);
            this.debuff2Duration =
                v <= 38 ? Math.max(0, 38 - v) : Math.max(0, 47 - v);
            this.showDebuff1 = v <= 23;
            this.showDebuff2 = v <= 38;
            this.showMove1 = v > 23 && this.debuff1Duration > 0;
            this.showMove2 = v > 38 && this.debuff2Duration > 0;
            this.stunDuration = v >= 33 && v <= 39 ? 39 - v : -1;
        }, () => { }, () => {
            this.running = false;
        });
    }
    skipToFirstMechanic() {
        this.appService.skipToFirstMechanic();
    }
    setStatusText(text) {
        this.statusText = text;
    }
    setSpeedMultiplier(value) {
        this.speedMultiplier = +value.target.value;
        switch (this.speedMultiplier) {
            case 1:
                this.animateClass = 'drs-animate-normal';
                break;
            case 2:
                this.animateClass = 'drs-animate-fast';
                break;
            case 3:
                this.animateClass = 'drs-animate-fastest';
                break;
            default:
                this.animateClass = 'drs-animate-slow';
        }
    }
    setPlayerMoves(playerMoves) {
        this.playerMoves = playerMoves;
        this.debuff1Duration = 23;
        this.debuff2Duration = 38;
        if (playerMoves != null && playerMoves.length === 2) {
            this.imageSrc1 = `assets/Debuff${playerMoves[0]}.png`;
            this.imageSrc2 = `assets/Debuff${playerMoves[1]}.png`;
            this.moveSrc1 = `assets/Move${playerMoves[0]}.png`;
            this.moveSrc2 = `assets/Move${playerMoves[1]}.png`;
            this.showDebuff1 = true;
            this.showDebuff2 = true;
        }
        else {
            this.imageSrc1 = '';
            this.imageSrc2 = '';
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 32, vars: 6, consts: [["class", "board", 4, "ngIf"], [1, "drs-sidepane"], [1, "drs-sidepane-row", 2, "text-align", "center", "height", "85px"], ["style", "display: inline-table", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "drs-sidepane-row", 2, "height", "100px"], [1, "drs-padding"], ["src", "assets/GreenSlime1.png", "class", "drs-green-slime", 4, "ngIf"], [1, "drs-sidepane-row", 2, "height", "90px"], ["style", "display: table; padding-left: 20px", 4, "ngIf"], [1, "drs-sidepane-row"], [1, "drs-credit"], [1, "board"], ["style", "display: table-row", 4, "ngFor", "ngForOf"], ["class", "drs-knight", 3, "knight", "ngClass", "ngStyle", 4, "ngIf"], [2, "display", "table-row"], ["class", "tile-div", 3, "tile", 4, "ngFor", "ngForOf"], [1, "tile-div", 3, "tile"], [1, "drs-knight", 3, "knight", "ngClass", "ngStyle"], [2, "display", "inline-table"], [2, "display", "table-cell", "vertical-align", "middle", 3, "click"], ["for", "speed", 2, "display", "table-cell", "width", "50px", "font-size", "10pt", "text-align", "right", "vertical-align", "middle"], [2, "display", "table-cell", "width", "70px", "vertical-align", "middle", 3, "value", "change"], ["value", "0.5"], ["value", "1"], ["value", "2"], ["value", "3"], [3, "click"], ["src", "assets/GreenSlime1.png", 1, "drs-green-slime"], [2, "display", "table", "padding-left", "20px"], [1, "drs-padding", 2, "display", "table-row", "position", "relative"], ["style", "display: table-cell; height: 32px", 3, "src", 4, "ngIf"], ["class", "drs-debuff-timer", "style", "left: 1.5px", 4, "ngIf"], ["class", "drs-debuff-timer", 3, "ngStyle", 4, "ngIf"], [2, "display", "table-cell", "height", "32px", 3, "src"], [1, "drs-debuff-timer", 2, "left", "1.5px"], [1, "drs-debuff-timer", 3, "ngStyle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "START GAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_div_6_Template, 15, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_button_7_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AppComponent_img_13_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "YOUR MOVES / DEBUFFS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AppComponent_div_17_Template, 10, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "CONTROLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Start the game with the button on top");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Move by clicking on a tile, or with WASD or arrow keys");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " You can move, whenever you would be able to in the game (as accurately as I could get it to work) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Created by: [Omega] Lumilyn Starbloom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Github Repo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.running);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.running && ctx.skippable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.statusText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showGreenSlime);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imageSrc1 && ctx.imageSrc2);
    } }, styles: ["h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tile-div[_ngcontent-%COMP%] {\n  height: 142px;\n  width: 142px;\n  max-height: 142px;\n  max-width: 142px;\n  display: table-cell;\n}\n\n.board[_ngcontent-%COMP%] {\n  display: table;\n  border: 1px solid darkgray;\n  position: relative;\n  margin-top: 100px;\n  margin-left: 100px;\n}\n\n.drs-knight[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.drs-animate-slow[_ngcontent-%COMP%] {\n  transition: all 3s ease-out;\n}\n\n.drs-animate-normal[_ngcontent-%COMP%] {\n  transition: all 1.5s ease-out;\n}\n\n.drs-animate-fast[_ngcontent-%COMP%] {\n  transition: all 0.75s ease-out;\n}\n\n.drs-animate-fastest[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-out;\n}\n\n.drs-sidepane[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: yellowgreen;\n  border: 1px solid black;\n  top: 15px;\n  left: 1000px;\n  display: table;\n  width: 320px;\n  height: 800px;\n}\n\n.drs-padding[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.drs-sidepane-row[_ngcontent-%COMP%] {\n  display: table-row;\n}\n\n.drs-credit[_ngcontent-%COMP%] {\n  font-size: 10pt;\n  text-align: right;\n  padding-right: 10px;\n}\n\n.drs-debuff-timer[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: small;\n  text-align: center;\n  min-width: 20px;\n}\n\n.drs-green-slime[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80px;\n  left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBSUUsMkJBQUE7QUFBRjs7QUFHQTtFQUlFLDZCQUFBO0FBQUY7O0FBR0E7RUFJRSw4QkFBQTtBQUFGOztBQUdBO0VBSUUsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpbGUtZGl2IHtcbiAgaGVpZ2h0OiAxNDJweDtcbiAgd2lkdGg6IDE0MnB4O1xuICBtYXgtaGVpZ2h0OiAxNDJweDtcbiAgbWF4LXdpZHRoOiAxNDJweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLmRycy1rbmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kcnMtYW5pbWF0ZS1zbG93IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgM3MgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAzcyBlYXNlLW91dDtcbn1cblxuLmRycy1hbmltYXRlLW5vcm1hbCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEuNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMS41cyBlYXNlLW91dDtcbn1cblxuLmRycy1hbmltYXRlLWZhc3Qge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2Utb3V0O1xufVxuXG4uZHJzLWFuaW1hdGUtZmFzdGVzdCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cblxuLmRycy1zaWRlcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDEwMDBweDtcbiAgZGlzcGxheTogdGFibGU7XG5cbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4uZHJzLXBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uZHJzLXNpZGVwYW5lLXJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cblxuLmRycy1jcmVkaXQge1xuICBmb250LXNpemU6IDEwcHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uZHJzLWRlYnVmZi10aW1lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDIwcHg7XG59XG5cbi5kcnMtZ3JlZW4tc2xpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODBweDtcbiAgbGVmdDogNTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dots_dots_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dots/dots.component */ "1a7w");
/* harmony import */ var _knight_knight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knight/knight.component */ "r5T0");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile/tile.component */ "H9aC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__["TileComponent"], _knight_knight_component__WEBPACK_IMPORTED_MODULE_3__["KnightComponent"], _dots_dots_component__WEBPACK_IMPORTED_MODULE_2__["DotsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__["TileComponent"], _knight_knight_component__WEBPACK_IMPORTED_MODULE_3__["KnightComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], []);


/***/ }),

/***/ "lFD5":
/*!****************************************!*\
  !*** ./src/app/domain/player.model.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _coords_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coords.model */ "AqEb");



class Player {
    constructor() {
        this.position$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.startingPos$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([this.position$, this.startingPos$]).subscribe((data) => {
            const startingRow = data[1].row;
            const startingCol = data[1].col;
            const row = data[0].row;
            const col = data[0].col;
            if (startingRow < 0 || startingCol < 0) {
                this.remainingSteps = 0;
                return;
            }
            const distanceToStartingPosition = Math.abs(row - startingRow) + Math.abs(col - startingCol);
            this.remainingSteps = this.steps - distanceToStartingPosition;
        });
    }
    get playerPosition() {
        return this.position$.asObservable();
    }
    get startingPosition() {
        return this.startingPos$.asObservable();
    }
    setPlayerPosition(row, col) {
        this.position$.next(new _coords_model__WEBPACK_IMPORTED_MODULE_2__["Coords"](row, col));
    }
    setStartingPosition(row, col) {
        this.startingPos$.next(new _coords_model__WEBPACK_IMPORTED_MODULE_2__["Coords"](row, col));
    }
    move(code) {
        this.position$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((pos) => {
            switch (code) {
                case 'ArrowLeft':
                case 'KeyA':
                    this.setPlayerPosition(pos.row, Math.max(0, pos.col - 1));
                    break;
                case 'ArrowUp':
                case 'KeyW':
                    this.setPlayerPosition(Math.max(0, pos.row - 1), pos.col);
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.setPlayerPosition(pos.row, Math.min(4, pos.col + 1));
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    this.setPlayerPosition(Math.min(4, pos.row + 1), pos.col);
                    break;
            }
        });
    }
}


/***/ }),

/***/ "nGYG":
/*!********************************!*\
  !*** ./src/app/domain/tile.ts ***!
  \********************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
class Tile {
    constructor(row, col, speedMultiplier) {
        this.row = row;
        this.col = col;
        this.speedMultiplier = speedMultiplier;
        this.explodingRow = false;
        this.explodingCol = false;
        const evenRow = this.row % 2 === 0;
        const evenCol = this.col % 2 === 0;
        this.color =
            this.row === 0 && this.col === 2
                ? 'aqua'
                : this.xor(evenRow, evenCol)
                    ? 'black'
                    : 'white';
        this.imgsrc = "";
    }
    xor(foo, bar) {
        return foo ? !bar : bar;
    }
}
Tile.Size = 142;
Tile.SizePx = '142px';


/***/ }),

/***/ "r5T0":
/*!********************************************!*\
  !*** ./src/app/knight/knight.component.ts ***!
  \********************************************/
/*! exports provided: KnightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnightComponent", function() { return KnightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dots_dots_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dots/dots.component */ "1a7w");



function KnightComponent_div_0_drs_dots_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "drs-dots", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dotCount", ctx_r1.knight.displayedSteps);
} }
function KnightComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KnightComponent_div_0_drs_dots_2_Template, 1, 1, "drs-dots", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.knight.displayedSteps != null);
} }
class KnightComponent {
}
KnightComponent.ɵfac = function KnightComponent_Factory(t) { return new (t || KnightComponent)(); };
KnightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnightComponent, selectors: [["drs-knight"]], inputs: { knight: "knight" }, decls: 1, vars: 1, consts: [["style", "position: relative", 4, "ngIf"], [2, "position", "relative"], ["src", "assets/Knight.PNG", 1, "drs-knight-image"], ["class", "drs-dots", 3, "dotCount", 4, "ngIf"], [1, "drs-dots", 3, "dotCount"]], template: function KnightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, KnightComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.knight);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _dots_dots_component__WEBPACK_IMPORTED_MODULE_2__["DotsComponent"]], styles: [".drs-knight-image[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100px;\n  z-index: 998;\n  top: 0px;\n  left: 0px;\n}\n\n.drs-knight-steps[_ngcontent-%COMP%] {\n  top: 35px;\n  left: 25px;\n  color: red;\n  font-weight: bold;\n  font-size: 28pt;\n}\n\n.drs-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 25px;\n  left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2tuaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUNGIiwiZmlsZSI6ImtuaWdodC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcnMta25pZ2h0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB6LWluZGV4OiA5OTg7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG59XG5cbi5kcnMta25pZ2h0LXN0ZXBzIHtcbiAgdG9wOiAzNXB4O1xuICBsZWZ0OiAyNXB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyOHB0O1xufVxuXG4uZHJzLWRvdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiA1cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "tePZ":
/*!**************************************!*\
  !*** ./src/app/core/unsubscriber.ts ***!
  \**************************************/
/*! exports provided: Unsubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unsubscriber", function() { return Unsubscriber; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Unsubscriber {
    constructor() {
        this._onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get onDestroy$() {
        return this._onDestroy$.asObservable();
    }
    ngOnDestroy() {
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }
}
Unsubscriber.ɵfac = function Unsubscriber_Factory(t) { return new (t || Unsubscriber)(); };
Unsubscriber.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Unsubscriber, factory: Unsubscriber.ɵfac });


/***/ }),

/***/ "xxy2":
/*!****************************************!*\
  !*** ./src/app/domain/knight.model.ts ***!
  \****************************************/
/*! exports provided: Knight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Knight", function() { return Knight; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _direction_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./direction.enum */ "MNfU");
/* harmony import */ var _position_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./position.model */ "OZhs");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile */ "nGYG");





class Knight {
    constructor(facing) {
        this.facing = facing;
        this.speedMultiplier = 1;
    }
    get target() {
        switch (this.facing) {
            case _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].W:
            case _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].N:
                return 3 - this.steps;
            case _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].E:
            case _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].S:
                return 1 + this.steps;
        }
    }
    init(index, steps) {
        // tslint:disable-next-line: no-non-null-assertion
        const pos = Knight.knightPositions.get(this.facing)[index];
        this.position = new _position_model__WEBPACK_IMPORTED_MODULE_3__["Position"](pos.top, pos.left);
        this.steps = steps;
        this.displayedSteps = steps;
        this.ready = true;
    }
    move() {
        switch (this.facing) {
            case _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].N:
                this.position.top -= this.steps * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size;
                break;
            case _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].E:
                this.position.left += this.steps * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size;
                break;
            case _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].S:
                this.position.top += this.steps * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size;
                break;
            case _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].W:
                this.position.left -= this.steps * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size;
                break;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1500 / this.steps / this.speedMultiplier)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(this.steps))
            .subscribe(() => {
            this.displayedSteps -= 1;
        }, () => { }, () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1500 / this.speedMultiplier)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(() => (this.ready = false)));
    }
}
Knight.knightPositions = new Map([
    [
        _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].W,
        [
            new _position_model__WEBPACK_IMPORTED_MODULE_3__["Position"](0 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size - 100, 3 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 43),
            new _position_model__WEBPACK_IMPORTED_MODULE_3__["Position"](5 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 2, 3 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 43),
        ],
    ],
    [
        _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].N,
        [
            new _position_model__WEBPACK_IMPORTED_MODULE_3__["Position"](3 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 21, 0 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size - 63),
            new _position_model__WEBPACK_IMPORTED_MODULE_3__["Position"](3 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 21, 5 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 3),
        ],
    ],
    [
        _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].E,
        [
            new _position_model__WEBPACK_IMPORTED_MODULE_3__["Position"](0 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size - 100, _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 43),
            new _position_model__WEBPACK_IMPORTED_MODULE_3__["Position"](5 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 2, _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 43),
        ],
    ],
    [
        _direction_enum__WEBPACK_IMPORTED_MODULE_2__["Direction"].S,
        [
            new _position_model__WEBPACK_IMPORTED_MODULE_3__["Position"](_tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 21, 0 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size - 63),
            new _position_model__WEBPACK_IMPORTED_MODULE_3__["Position"](_tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 21, 5 * _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"].Size + 3),
        ],
    ],
]);


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map