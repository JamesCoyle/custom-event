export default function (target)
{
	target._event = [];

	target.on = function (evnt, callback, name)
	{
		// return if malformed
		if (typeof evnt !== 'string' || typeof callback !== 'function') return;

		// loop through comma separated list
		evnt.split(/\s*,\s*/).forEach((e) =>
		{
			// create array if doesn't exist
			if (!Array.isArray(this._event[e]))
				this._event[e] = [];

			// add event callback
			this._event[e].push(
			{
				name: name,
				callback: callback
			});

			this._eventAdded(e);
		});

		return this;
	};

	target.removeBinding = function (evnt, name)
	{
		if (Array.isArray(this._event[evnt]))
		{
			for (let i = this._event[evnt].length; i > 0; --i)
			{
				if (evnt[i].name == name)
					array.splice(i, 1)
			}
		}
	};

	target._eventBound = function (evnt)
	{
		return (Array.isArray(this._event[evnt]) && this._event[evnt].length > 0);
	};

	target._eventAdded = function ()
	{
		// override this
	};

	target._call = function (evnt, ...args)
	{
		if (Array.isArray(this._event[evnt]))
			this._event[evnt].forEach(function (evnt)
			{
				if (typeof evnt.callback == 'function')
				{
					evnt.callback(...args);
				}
			});
	};
}
