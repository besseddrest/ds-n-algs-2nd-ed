function Dictionary() {
  let items = {};

  // checks if items has key
  this.has = (key) => {
    return key in items;
  };

  // sets key value pair in items
  this.set = (key, value) => {
    items[key] = value;
  };

  // deletes key value pair
  this.delete = (key) => {
    if (this.has(key)) {
      delete items[key];
      return true;
    }

    return false;
  };

  // checks if key is in items and returns value or undefined
  this.get = (key) => {
    return this.has(key) ? items[key] : undefined;
  };

  // returns an array of all the values in items
  this.values = () => {
    let values = [];

    for (let key in items) {
      if (this.has(key))
        values.push(items[key]);
    }

    return values;
  };

  // clears the items
  this.clear = () => {
    items = {};
  };

  // gets the number of key value pairs in items
  this.size = () => {
    return Object.keys(items).length;
  };

  // returns an array of all the keys in items
  this.keys = () => {
    return Object.keys(items);
  };

  // returns items object
  this.getItems = () => {
    return items;
  }
}

// address book
const addy = new Dictionary();

addy.set('Harold', 'hcabalic@gmail.com');
addy.set('Sarah', 'scabalic@gmail.com');
addy.delete('Harold');
addy.clear();
console.log(addy.getItems());
