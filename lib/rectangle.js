'use strict';

let Shape = require('@alu0100821390/ull-shape');

/**
* Clase que representa figuras con formas rectangulares
* @class Rectangle
* @param {hash} options Alto y Ancho
*/
class Rectangle extends Shape {
	/**
	* Constructor de la clase Rectangle
	* @construct Rectangle
	* @param {hash} options Alto y Ancho
	*/
    constructor(options) {
      super(options)
    }
	/**
	* Función que calcula y devuelve el área de la figura
	* @function area
	* @return {number} Área de la figura
	*/
    area() {
      return this.width * this.height;
    }
}

Shape.Shapes.Rectangle = Rectangle;

module.exports = Rectangle;
