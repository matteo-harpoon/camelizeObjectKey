/*
* @Author: Matteo
* @Date:   2016-04-19 06:39:17
* @Last Modified by:   Matteo Zambon
* @Last Modified time: 2016-04-19 07:13:43
*/

var camelCase = require("camelcase");
var decamelize = require("decamelize");
var isArray = require("is-array");

exports.camelize = function(object) {

	function camelizeObject(object)
	{
		if(isArray(object))
		{
			var newObject = [];

			for(var k in object)
			{
				if(object.hasOwnProperty(k))
				{
					if(typeof object[k] == "object" && object[k])
					{
						newObject.push(camelizeObject(object[k]));
					}
					else
					{
						newObject.push(object[k]);
					}
				}
			}
		}
		else
		{
			var newObject = {};

			for(var k in object)
			{
				if(object.hasOwnProperty(k))
				{
					var newK = camelCase(k);
					newObject[newK] = object[k];

					if(typeof newObject[newK] == "object" && newObject[newK])
					{
						newObject[newK] = camelizeObject(newObject[newK]);
					}
				}
			}
		}

		return newObject;
	}

	return camelizeObject(object);
};

exports.decamelize = function(object, separator) {
	function decamelizeObject(object, separator)
	{
		if(isArray(object))
		{
			var newObject = [];

			for(var k in object)
			{
				if(object.hasOwnProperty(k))
				{
					if(typeof object[k] == "object" && object[k])
					{
						newObject.push(decamelizeObject(object[k]));
					}
					else
					{
						newObject.push(object[k]);
					}
				}
			}
		}
		else
		{
			var newObject = {};

			for(var k in object)
			{
				if(object.hasOwnProperty(k))
				{
					var newK = decamelize(k, separator);
					newObject[newK] = object[k];

					if(typeof newObject[newK] == "object" && newObject[newK])
					{
						newObject[newK] = decamelizeObject(newObject[newK]);
					}
				}
			}
		}

		return newObject;
	}

	separator = typeof separator == "undefined" ? "_" : separator == null ? "_" : separator;

	return decamelizeObject(object, separator);
};
