export = class Calculator {

  public static add(a: number, b: number): number {
    return a + b
  }

  public static substract(a: number, b: number): number {
    return a - b
  }

  public static multiply(a: number, b: number): number {
    return a * b
  }

  public static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Can not divide by zero')
    }
    return a / b
  }
}