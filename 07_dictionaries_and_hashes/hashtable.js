function hashTable() {
  let table = [];

  // gets the position of the key arg
  let getHashCode = (key) => {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    // arbitrary modulo number
    return hash % 37;
  }

  // sets or updates the value at the position in table
  this.put = (key, value) => {
    table[getHashCode(key)] = value;
  };

  // gets the value at position in table
  this.get = (key) => {
    return table[getHashCode(key)];
  };

  // sets value at position to undefined
  this.remove = (key) => {
    table[getHashCode(key)] = undefined;
  };

  this.print = () => {
    for (let i = 0; i < table.length; i++) {
      if (table[i] !== undefined)
        console.log(`${i}: ${table[i]}`);
    }
  };
}

const emails = new hashTable();

emails.put('Jared', 'jared.lindo@gmail.com');
emails.put('Harold', 'hcabalic@gmail.com');
emails.put('Sarah', 'scabalic@gmail.com');
emails.print();
