# Custom Event Decorator Function

A simple decorator function to allow a class to provide event-like callback bindings which are triggerable within that class.

## Usage

```js
@customEvent
class MyClass
{
  constructor()
  {
    this._call('constructed');
  }
}
```
