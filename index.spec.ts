
import { assert, expect } from 'chai'
import 'mocha'

import Calculator from './index'

describe('Calculator - Tests', () => {

  it('add - successfully case - expected result should be returned', () => {
    // Arrange
    const a = 6
    const b = 3
    // Expected result
    const expectedResult = 9
    // Act
    const result = Calculator.add(a, b);
    // Expect
    expect(result).to.be.equals(expectedResult)
  })

  it('substract - successfully case - expected result should be returned', () => {
    // Arrange
    const a = 6
    const b = 3
    // Expected result
    const expectedResult = 3
    // Act
    const result = Calculator.substract(a, b);
    // Expect
    expect(result).to.be.equals(expectedResult)
  })

  it('multiply - successfully case - expected result should be returned', () => {
    // Arrange
    const a = 6
    const b = 3
    // Expected result
    const expectedResult = 18
    // Act
    const result = Calculator.multiply(a, b);
    // Expect
    expect(result).to.be.equals(expectedResult)
  })

  it('divide - successfully case - expected result should be returned', () => {
    // Arrange
    const a = 6
    const b = 3
    // Expected result
    const expectedResult = 2
    // Act
    const result = Calculator.divide(a, b);
    // Expect
    expect(result).to.be.equals(expectedResult)
  })

  it('divide - divide by zero failed case - expected error should be returned', () => {
    // Arrange
    const a = 6
    const b = 0
    // Expected result
    const expectedErrorMessage = 'Can not divide by zero'
    // Act
    try {
      Calculator.divide(a, b);
      assert(false)
    } catch (error: any) {
      // Expect
      expect(error.message).to.be.equals(expectedErrorMessage)
    }
  })

})