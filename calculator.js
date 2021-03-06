/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function() {
    var total = 0;
    var memory = 0;

   /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    var load = function(x) {
        if (typeof x === 'number') {
            total = x;
            return total;
        } else {
            throw error;
        }
    } 

     /**
   * Return the value of `total`
   * @return { Number }
   */
    var getTotal = function() {
        return total;
    }   

   /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    var add = function(x) {
        if (typeof x === 'number') {
            total += x;
            return total;
        } else {
            throw error;
        }
    }

   /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    var subtract = function(x) {
        if (typeof x === 'number') {
            total -= x;
            return total;
        } else {
            throw error;
        }
    }

   /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
    var multiply = function(x) {
        if (typeof x === 'number') {
            total *= x;
            return total
        } else {
            throw error;
        }
    }

   /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
    var divide = function(x) {
        if (typeof x === 'number') {
            total /= x;
            return total;
        } else {
            throw error;
        }

    }

   /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    var recallMemory = function() {
        return memory;
    }

   /**
   * Stores the value of `total` to `memory`
   */
    var saveMemory = function() {
        memory = total;
        return memory;
    }

   /**
   * Clear the value stored at `memory`
   */
    var clearMemory = function() {
        memory = 0;
        return memory;
    }
   return {
    load,
    getTotal,
    add,
    subtract,
    multiply,
    divide,
    recallMemory,
    saveMemory,
    clearMemory
   };

};



  /**
   * Validation
   */

