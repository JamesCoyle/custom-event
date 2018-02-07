export default (superclass) => class extends superclass
{
	constructor()
	{
		super();

		this._events = new Map;
	}

	on(evnt, callback, name)
	{
		// return if malformed
		if (typeof evnt !== 'string' || typeof callback !== 'function') return;

		// loop through comma separated list
		evnt.split(',').forEach((e) =>
		{
			// remove whitespace
			e = e.trim();

			// add event callback
			this.addEventListener(e, callback);

			// create array if doesn't exist
			this._events.has(evnt) || this._events.set(evnt, []);

			// cache event callback
			this._events.get(e).push(
			{
				name: name,
				callback: callback
			});
		});

		return this;
	}

	removeListenerFor(evnt, identifier)
	{
		let bindings = this._events.get(evnt),
			property;

		// determine if should check name or callback function
		switch (typeof identifier)
		{
			case 'string':
				property = 'name';
				break;

			case 'function':
				property = 'callback';
				break;

			default:
				return;
		}

		// check for match and remove event if found
		for (let i = bindings.length; --i >= 0;)
		{
			if (bindings[i][property] === identifier)
			{
				// remove event
				this.removeEventListener(evnt, bindings[i].callback);

				// clear event cache
				bindings.splice(i, 1);
			}
		}

		return this;
	}

	removeAllListenersFor(evnt)
	{
		// return if event doesn't exist
		this._events.has(evnt) ||
			return this;

		// remove all event listeners for this event
		this._events.get(evnt).forEach((e) =>
		{
			this.removeEventListener(evnt, e.callback);
		});

		// clear event cache
		this._events.delete(evnt);

		return this;
	}

	hasListenerFor(evnt)
	{
		if (!this._events.has(evnt))
			return false;

		let bindings = this._events.get(evnt);

		return Array.isArray(bindings) && bindings.length > 0;
	}

	_emit(evnt, ...args)
	{
		this.dispatchEvent();
	}
}
