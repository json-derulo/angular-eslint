<!--

  DO NOT EDIT.

  This markdown file was autogenerated using a mixture of the following files as the source of truth for its data:
  - ../../src/rules/no-output-on-prefix.ts
  - ../../tests/rules/no-output-on-prefix/cases.ts

  In order to update this file, it is therefore those files which need to be updated, as well as potentially the generator script:
  - ../../../../tools/scripts/generate-rule-docs.ts

-->

<br>

# `@angular-eslint/no-output-on-prefix`

Ensures that output bindings, including aliases, are not named "on", nor prefixed with it. See more at https://angular.dev/guide/components/outputs#choosing-event-names

- Type: suggestion

<br>

## Rule Options

The rule does not have any configuration options.

<br>

## Usage Examples

> The following examples are generated automatically from the actual unit tests within the plugin, so you can be assured that their behavior is accurate based on the current commit.

<br>

<details>
<summary>❌ - Toggle examples of <strong>incorrect</strong> code for this rule</summary>

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Component({
  outputs: ['on']
            ~~~~
})
class Test {}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Directive({
  inputs: [onCredit],
  'outputs': [onLevel, `test: on`, onFunction()],
                       ~~~~~~~~~~
})
class Test {}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Component({
  ['outputs']: ['onTest: test', ...onArray],
                ~~~~~~~~~~~~~~
})
class Test {}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Directive({
  [`outputs`]: ['onTest: test', ...onArray],
                ~~~~~~~~~~~~~~
})
class Test {}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Component()
class Test {
  @Output() on: EventEmitter<any> = new EventEmitter<{}>();
            ~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Component()
class Test {
  on = output();
  ~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Directive()
class Test {
  @Output() @Custom('on') 'onPrefix' = new EventEmitter<void>();
                          ~~~~~~~~~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Directive()
class Test {
  'onPrefix' = output();
  ~~~~~~~~~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Component()
class Test {
  @Custom() @Output(`on`) _on = getOutput();
                    ~~~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Component()
class Test {
  _on = output({ alias: `on` });
                        ~~~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Directive()
class Test {
  @Output('onPrefix') _on = (this.subject$ as Subject<{on: boolean}>).pipe();
          ~~~~~~~~~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Directive()
class Test {
  _on = output({ alias: 'onPrefix' });
                        ~~~~~~~~~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Component()
class Test {
  @Output('getter') get 'on-getter'() {}
                        ~~~~~~~~~~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Directive()
class Test {
  @Output(`onGetter`) get getter() {}
          ~~~~~~~~~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Injectable()
class Test {
  @Output('on') onPrefix = this.getOutput();
          ~~~~  ~~~~~~~~
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Injectable()
class Test {
  onPrefix = output({ alias: 'on' });
  ~~~~~~~~                   ~~~~
}
```

</details>

<br>

---

<br>

<details>
<summary>✅ - Toggle examples of <strong>correct</strong> code for this rule</summary>

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
class Test {}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Page({
  outputs: ['on', onChange, `onLine`, 'on: on2', 'offline: on', ...onCheck, onOutput()],
})
class Test {}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Component()
class Test {
  on = new EventEmitter();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Directive()
class Test {
  @Output() buttonChange = new EventEmitter<'on'>();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Directive()
class Test {
  buttonChange = output<'on'>();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Component()
class Test {
  @Output() On = new EventEmitter<{ on: onType }>();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Component()
class Test {
  On = output<{ on: onType }>();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Directive()
class Test {
  @Output(`one`) ontype = new EventEmitter<{ bar: string, on: boolean }>();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Directive()
class Test {
  ontype = output<{ bar: string, on: boolean }>({ alias: `one` });
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Component()
class Test {
  @Output('oneProp') common = new EventEmitter<ComplextOn>();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Component()
class Test {
  common = output<ComplextOn>({ alias: 'oneProp' });
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Directive()
class Test<On> {
  @Output() ON = new EventEmitter<On>();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Directive()
class Test<On> {
  ON = output<On>();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
const on = 'on';
@Component()
class Test {
  @Output(on) touchMove: EventEmitter<{ action: 'on' | 'off' }> = new EventEmitter<{ action: 'on' | 'off' }>();
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
const on = 'on';
@Component()
class Test {
  touchMove = output<{ action: 'on' | 'off' }>({ alias: on });
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
const test = 'on';
const on = 'on';
@Directive()
class Test {
  @Output(test) [on]: EventEmitter<OnTest>;
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
const test = 'on';
const on = 'on';
@Directive()
class Test {
  [on] = output<OnTest>({ alias: test });
}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Component({
  selector: 'foo',
  'outputs': [`test: foo`]
})
class Test {}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Directive({
  selector: 'foo',
  ['outputs']: [`test: foo`]
})
class Test {}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Component({
  'selector': 'foo',
  [`outputs`]: [`test: foo`]
})
class Test {}
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/no-output-on-prefix": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Directive({
  selector: 'foo',
})
class Test {
  @Output() get 'getter'() {}
}
```

</details>

<br>
