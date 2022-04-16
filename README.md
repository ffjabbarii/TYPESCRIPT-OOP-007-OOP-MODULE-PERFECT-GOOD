# README

[![](https://img.shields.io/badge/typescript-lang-blue.svg)](https://www.typescriptlang.org/)

Exploring how Typescript handles `this` vs. `super` in the most recent build.

Also destructuring keys.

## Super vs. This

Should be allowed. `this.method()` called on a subclassed class (where `method()` is on the inherited super class) should execute without issue (provided `this` is bound to the superclass via `super`).

> I think there's a strong preference for `super.method()` now instead to avoid ambiguities.

> `this` and `super` both work.

## String Literal Keys

Sometimes using a special character is needed for a key in a type/interface. 

Tests to see what's allowed or not.