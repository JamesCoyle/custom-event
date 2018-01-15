# Custom Event Decorator Function

A simple decorator function to allow a class to provide event-like callback bindings which are triggerable within that class.

## Usage

```js
// class definition
import customEvent from './custom-event.js';

@customEvent
class MyClass
{
  constructor()
  {
    
  }
  
  update()
  {
    this._call('update');
  }
}
```


```js
// main code which uses class
let instance = new MyClass();

instance.on('update', () => {
  console.log('Updated!');
});
```
