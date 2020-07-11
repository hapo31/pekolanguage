const TOKENS_MAP = [
  ["ｱｯｱｯｱｯ", "+"],
  ["にーんじん", "-"],
  ["きｔら", ">"],
  ["ぺこ", "<"],
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

  public async execute(code: string) {
    return this.executeSync(code);
  }
  public executeSync(code: string) {
    this.code = this.transpilePekotoBF(code);
    // eslint-disable-next-line
    console.log(`Transpiled: ${code}\n => \n${this.code}`);
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
        if (process) {
          // node.js
          // const buffers: Buffer[] = [];
          // for await (const chunk of process.stdin) buffers.push(chunk);
          // const buffer = Buffer.concat(buffers);
          // const text = buffer.toString();
          // this.mem[this.ptr] = text.charCodeAt(0);
        } else {
          // javascript
          const text = window.prompt(`${this.pos}:>`);
          if (text != null) {
            this.mem[this.ptr] = text.charCodeAt(0);
          }
        }
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

  public transpilePekotoBF(rawCode: string) {
    return TOKENS_MAP.reduce(
      (prev, curr) => prev.replace(new RegExp(curr[0], "g"), curr[1]),
      rawCode
    );
  }
}
