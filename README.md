# README

[![](https://img.shields.io/badge/typescript-lang-blue.svg)](https://www.typescriptlang.org/)

Exploring how Typescript handles `this` vs. `super` in the most recent build.

## Note

Should be allowed. `this.method()` called on a subclassed class (where `method()` is on the inherited super class) should execute without issue (provided `this` is bound to the superclass via `super`).

I think there's a strong preference for `super.method()` now instead to avoid ambiguities.