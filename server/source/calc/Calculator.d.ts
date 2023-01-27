// Ambient Namespace

declare namespace Calculator {
  export interface Basic {
    sum(...args: number[]): number;
  }
  export interface Scientific {
    sum(...args: number[]): number;
  }
  export interface Programmer {}
}

declare var Calc: Calculator.Basic;
