function Set() {
  let items = {};

  // checks if value exists
  this.has = (value) => {
    return items.hasOwnProperty(value);
  };

  // adds new value if doesn't exist
  this.add = (value) => {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  // deletes value if exists
  this.remove = (value) => {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  // clears values
  this.clear = () => {
    items = {};
  };

  // gets number of values
  this.length = () => {
    return Object.keys(items).length;
  };

  // returns values in an array
  this.values = () => {
    let values = [];
    for (let i = 0, tempItems = Object.keys(items); i < tempItems.length; i++) {
      values.push(tempItems[i]);
    }
    return values;
  }

  // returns a new Set containing values from set A and set B
  this.union = (otherSet) => {
    let union = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++){
      union.add(values[i]);
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++){
      union.add(values[i]);
    }

    return union;
  }

  // returns a new set containing values shared by set A and set B
  this.intersection = (otherSet) => {
    let intersection = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i]))
        intersection.add(values[i]);
    }

    return intersection;
  }

  // returns a new set containing values not shared by set A and set B
  this.difference = (otherSet) => {
    let difference = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i]))
        difference.add(values[i]);
    }

    return difference;
  }

  // returns true if all the values in set A exist in set B
  this.subset = (otherSet) => {
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i]))
        return false;
    }

    return true;
  }
}

const firstSet = new Set();
firstSet.add('Mom');
firstSet.add('Dad');
console.log(firstSet.values());

const secondSet = new Set();
secondSet.add('Harold');
secondSet.add('Sarah');
secondSet.add('Brian');
secondSet.add('Mom');
secondSet.add('Dad');

const subset = firstSet.subset(secondSet);
console.log(subset);
