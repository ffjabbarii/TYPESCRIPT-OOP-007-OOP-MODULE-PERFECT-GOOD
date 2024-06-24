FRED JABBARI:  THIS IS A VERY VERY GOOD SOURCE
It shows OOP and Modules... PERFECT.. 
Show how this will solve Terraform Global pattern limitation...


HOW TO RUN THIS:


╭─fjabbari@fjabbari-4611-mac in ~/REPO_TYPESCRIPT_OO/TYPESCRIPT-OOP-007-OOP-MODULE-PERFECT-GOOD on master ✔ (origin/master)

╰$ ls      

README.md         package-lock.json src

babel.config.js   package.json      tsconfig.json

╭─fjabbari@fjabbari-4611-mac in ~/REPO_TYPESCRIPT_OO/TYPESCRIPT-OOP-007-OOP-MODULE-PERFECT-GOOD on master ✔ (origin/master)

╰$ code .     

╭─fjabbari@fjabbari-4611-mac in ~/REPO_TYPESCRIPT_OO/TYPESCRIPT-OOP-007-OOP-MODULE-PERFECT-GOOD on master ✔ (origin/master)

╰$ ls

README.md         package-lock.json src

babel.config.js   package.json      tsconfig.json

╭─fjabbari@fjabbari-4611-mac in ~/REPO_TYPESCRIPT_OO/TYPESCRIPT-OOP-007-OOP-MODULE-PERFECT-GOOD on master ✔ (origin/master)

╰$ bun run src/main.ts

testB1

funcA

101010

testB2

funcA

101010

true

===================

c1

d1

e1

f1

╭─fjabbari@fjabbari-4611-mac in ~/REPO_TYPESCRIPT_OO/TYPESCRIPT-OOP-007-OOP-MODULE-PERFECT-GOOD on master ✔ (origin/master)

╰$ pwqd

zsh: command not found: pwqd

╭─fjabbari@fjabbari-4611-mac in ~/REPO_TYPESCRIPT_OO/TYPESCRIPT-OOP-007-OOP-MODULE-PERFECT-GOOD on master ✔ (origin/master)

╰$ pwd 

/Users/fjabbari/REPO_TYPESCRIPT_OO/TYPESCRIPT-OOP-007-OOP-MODULE-PERFECT-GOOD

╭─fjabbari@fjabbari-4611-mac in ~/REPO_TYPESCRIPT_OO/TYPESCRIPT-OOP-007-OOP-MODULE-PERFECT-GOOD on master ✔ (origin/master)

╰$ 





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