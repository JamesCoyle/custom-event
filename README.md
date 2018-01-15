# Custom Event Mixin

A simple mixin to allow a class to provide event-like callback bindings which are triggerable within that class.

## Requirements
This mixin was designed to be used with my [mixin-builder](https://github.com/JamesCoyle/mixin-builder) utility. It is recommended you use that utility with this mixin though you are free to implement this code as you wish.

## Usage

```js
// class definition
import CustomEvent from './custom-event.js';

class MyClass extends self.using(CustomEvent)
{
  constructor()
  {
    // constructors gonna construct
  }
  
  update()
  {
    // let external code know that this object has updated
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

## Methods
This mixin exposes the following methods on the target object: 

### On
Binds a callback to an event name.

#### Syntax
instance.on(eventName, callback [, eventID]);

#### Parameters
Parameter | Description
--- | ---
eventName | The name of the 'event' to listen for. This can be a comma separated list of values. Note: this does not bind to standard DOM events.
callback | The code to run when the event is called.
eventID | A unique identifier used for removing an event listener.

