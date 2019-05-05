// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    // stack 1
    this.first = new Stack();
    // stack 2
    this.second = new Stack();
  }

  add(record) {
    // push data into first stack
    this.first.push(record);
  }

  remove() {
    // we use the peek method to check if there is still a record in the first stack to pop and push to second stack
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    // we remove the last item from second stack that we want to return
    const record = this.second.pop();

    // while there are records in the second stack, push the popped records back to the first stack.
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    // return the record that we wanted to show using FIFO methodology for a queue
    return record;
  }

  peek() {
    // while there are records in the first stack, we need to push the item we removed from the first stack into the second stack
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    // create a variable that we want to return when the q.peek function is called upon
    // peek without removing the record from the second stack
    const record = this.second.peek();

    // set back all the items to its original state/stack?
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

module.exports = Queue;
