import { call, CLI } from "@christianjuth/ts-cli-generator";

/**
 * Add two numbers
 */
function add(x: number, y: number) {
  console.log(x + y);
}

/**
 * Subtract two numbers
 */
function subtract(x: number, y: number) {
  console.log(x - y);
}

/**
 * Multiply two numbers
 */
function multiply(x: number, y: number) {
  console.log(x * y);
}

/**
 * Divider one number by the other
 */
function divide(x: number, y: number) {
  console.log(x / y);
}

/**
 * Square a number
 */
function square(x: number) {
  console.log(x ** 2);
}

/**
 * Cube a number
 */
function cube(x: number) {
  console.log(x ** 3);
}

/**
 * Cube a number
 */
function sqrt(x: number) {
  console.log(Math.sqrt(x));
}

/**
 * Bitwise and
 */
function bitwiseAnd(x: number, y: number) {
  console.log(x & y);
}

/**
 * Bitwise or
 */
function bitwiseOr(x: number, y: number) {
  console.log(x | y);
}

export const cli: CLI = {
  add,
  subtract,
  multiply,
  divide,
  square,
  cube,
  sqrt,
  bitwiseAnd,
  bitwiseOr,
};
