function Set() {
  let items = {};
  this.has = (value) => {
    return items.hasOwnProperty(value);
  };
  this.add = (value) => {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };
  this.remove = (value) => {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };
  this.clear = () => {
    items = {};
  };
  this.length = () => {
    return Object.keys(items).length;
  }
}

const newSet = new Set();
newSet.add('Harold'); // false
newSet.add('Sarah'); // false
newSet.add('Brian'); // false
console.log(newSet.length());
