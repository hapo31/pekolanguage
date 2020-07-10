const TOKENS_MAP = [
  ["ｱｯｱｯｱｯ", "+"],
  ["にーんじん", "-"],
  ["きｔら", ">"],
  ["だよ", "."],
  ["はぃぃ", ","],
  ["ふざけんな", "["],
  ["マンッ", "]"],
];

export default class PekolanguageContext {
  private mem: number[] = [];
  private ptr = 0;
  private nestStack: number[] = [];
  private pos = 0;
  private code = "";

  private output = "";

  public execute(code: string) {
    this.code = this.transpilePekotoBF(code);
    while (this.read());
    return this.output;
  }

  private read() {
    switch (this.code[this.pos]) {
      case "+":
        if (this.mem[this.ptr] === undefined) {
          this.mem[this.ptr] = 0;
        }
        this.mem[this.ptr]++;
        break;
      case "-":
        this.mem[this.ptr]--;
        break;
      case ">":
        this.ptr++;
        break;
      case "<":
        this.ptr--;
        break;
      case ".":
        this.output += String.fromCharCode(this.mem[this.ptr]);
        break;
      case ",":
        break;
      case "[":
        if (this.mem[this.ptr] === 0) {
          this.pos = this.code.indexOf("]", this.pos);
          if (this.pos === -1) {
            throw Error(`対応する[がありません pos:${this.pos}`);
          }
        } else {
          this.nestStack.push(this.pos);
        }
        break;
      case "]":
        {
          const nextPos = this.nestStack.pop();
          if (nextPos === undefined) {
            throw Error(`対応する[がありません pos:${this.pos}`);
          }
          this.pos = nextPos - 1;
        }
        break;
    }

    this.pos++;

    if (this.pos >= this.code.length) {
      return false;
    }

    return true;
  }

  private transpilePekotoBF(rawCode: string) {
    return TOKENS_MAP.reduce(
      (prev, curr) => prev.replace(new RegExp(curr[0], "g"), curr[1]),
      rawCode
    );
  }
}
