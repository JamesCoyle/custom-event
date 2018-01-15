# Custom Event Decorator Function

A simple decorator function to allow a class to provide event-like callback bindings which are triggerable within that class.

## Usage

@custom-event
class MyClass
{
  constructor()
  {
    this._call('constructed');
  }
}
