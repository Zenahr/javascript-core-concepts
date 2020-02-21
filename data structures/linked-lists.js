// Some shorthand code to make my life easier
const L = function(message) {return console.log(message)}
const T = function(object) {return console.table(object)}

// INTRODUCTION
// Linked lists are made out of nodes which are "linked" to one-another. Meaning nodes hold references to neighbouring nodes
// they can be singely linked
// O -> O -> O -> O
// or doubly linked
// O <-> O <-> O <-> O

// nodes hold a value, and references to the previous and latter node

// As with any other data structure, linked lists have well-defined operations.
// I will implement simple push and pull functions, as well as a node-searching function.

// Linked list object constructor function
// Sidenote: Since an empty linked list got no nodes and therefore no head nor tail, I initialize the linked list with head and tail being null.
function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next_node,  previous_node) {
    this.value = value
    this.next_node = next_node
    this.previous_node = previous_node
}

// The this keyword references the linked list object
LinkedList.prototype.add_to_head = function(value) {
    const new_node = new Node(value, this.head, null)
    if(this.head) {
        this.head.previous_node = new_node
    } else {
        // If the newly created head is the only node in our linked list, it is also the tail of our list
        this.tail = new_node
    }
    this.head = new_node
}

LinkedList.prototype.add_to_tail = function(value) {
    const new_node = new Node(value, null, this.tail)
    if (this.tail) {
        this.tail.next_node = new_node
    } else {
        this.head = new_node
    }
    this.tail = new_node
}

// Initiate new linked list
const to_do_list = new LinkedList()
T(to_do_list)

// Initiate new node
// Sidenote: as this is the first node in our linked list, it has no previous node reference to it (since there is none).
var task_one = new Node('finish dish washing', 'next_task', null)
T(task_one)

// Add node to the head
to_do_list.add_to_head('practice guitar')
T(to_do_list)
to_do_list.add_to_head('pratice piano')
T(to_do_list)
to_do_list.add_to_head('take a shower')
T(to_do_list)

to_do_list.add_to_tail('read a book')
T(to_do_list)
to_do_list.add_to_tail('browse reddit')
T(to_do_list)
to_do_list.add_to_tail('watch a movie')

L(to_do_list.tail)
L(to_do_list.tail.previous_node.previous_node)