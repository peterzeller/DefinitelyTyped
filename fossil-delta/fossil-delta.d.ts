// Type definitions for fossil-delta 0.2.5
// Project: https://github.com/dchest/fossil-delta-js
// Definitions by: Endel Dreyer <https://github.com/endel/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
declare module "fossil-delta" {
  type ByteArray = number[] | Uint8Array | Buffer;

  export function create(origin: ByteArray, target: ByteArray): number[];
  export function apply(origin: ByteArray, delta: number[]): number[];
  export function outputSize(delta: number[]): number;
}
