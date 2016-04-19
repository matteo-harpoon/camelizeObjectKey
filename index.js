/*
* @Author: Matteo
* @Date:   2016-04-19 06:39:17
* @Last Modified by:   Matteo
* @Last Modified time: 2016-04-19 06:39:25
*/

exports.camelizeObject = function(type, object, separator) {

	var camelCase = require("camelcase");
	var decamelize = require("decamelize");
	var isArray = require("is-array");

	function camelizeObject(object)
	{
		if(isArray(object))
		{
			var newObject = [];

			for(var k in object)
			{
				if(typeof object[k] == "object")
				{
					newObject.push(camelizeObject(object[k]));
				}
				else
				{
					newObject.push(object[k]);
				}
			}
		}
		else
		{
			var newObject = {};

			for(var k in object)
			{
				var newK = camelCase(k);
				newObject[newK] = object[k];

				if(typeof newObject[newK] == "object")
				{
					newObject[newK] = camelizeObject(newObject[newK]);
				}
			}
		}

		return newObject;
	}

	function decamelizeObject(object, separator)
	{
		if(isArray(object))
		{
			var newObject = [];

			for(var k in object)
			{
				if(typeof object[k] == "object")
				{
					newObject.push(decamelizeObject(object[k]));
				}
				else
				{
					newObject.push(object[k]);
				}
			}
		}
		else
		{
			var newObject = {};

			for(var k in object)
			{
				var newK = decamelize(k, separator);
				newObject[newK] = object[k];

				if(typeof newObject[newK] == "object")
				{
					newObject[newK] = decamelizeObject(newObject[newK]);
				}
			}
		}

		return newObject;
	}

	if(type == "camelize")
	{
		return camelizeObject(object);
	}
	if(type == "decamelize")
	{
		separator = typeof separator == "undefined" ? "_" : separator == null ? "_" : separator;

		return decamelizeObject(object, separator);
	}

	throw "Type is invalid, accepted camelize/decamelize";
}
