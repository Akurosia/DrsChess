export class Tile {
  public static readonly Size = 142;
  public static readonly SizePx = '142px';

  public color: string;
  public imgsrc: string;
  public explodingRow = false;
  public explodingCol = false;

  constructor(
    public readonly row: number,
    public readonly col: number,
    public readonly speedMultiplier: number
  ) {
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

  private xor(foo: boolean, bar: boolean): boolean {
    return foo ? !bar : bar;
  }
}
