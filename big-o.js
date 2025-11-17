class PersonalArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        this.data[this.length - 1];
        this.length--;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }


    length() {
        return this.length;
    }

    shift() {
    if (this.length === 0) return undefined;
    const firstItem = this.data[0];
    this._shiftItems(0);
    return firstItem;
  }

  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }


  get(index) {
    return this.data[index];
  }


  


}


let hobbies = new PersonalArray();
hobbies.push('Reading');
hobbies.push('Traveling');
hobbies.push('Cooking');

hobbies.pop();

hobbies.unshift('Gardening');

console.log(hobbies);