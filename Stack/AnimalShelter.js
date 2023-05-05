class Animal {
    constructor(n){
        this.name = n; //for storing dog or cat
        this.order = 0; //for storing the order of that naimal
        this.next = null; //for storing next link
    }

    isOlderThan(animal){
        return this.order < animal.getOrder();
    }

    getOrder(){
        return this.order;
    }
    setOrder(order){
        this.order = order;
    }
}

class Dog extends Animal{
    constructor(){
        super('dog');
    }
}

class Cat extends Animal{
    constructor(){
        super('cat');
    }
}

class AnimalQueue {
    constructor(){
        this.dogs = new LinkedList();
        this.cats = new LinkedList();
        this.order = 0;
    }

    printShelterAnimals(){
        console.log('**** cats ****');
        this.cats.printQueue();
        console.log('**** dogs ****');
        this.dogs.printQueue();
    }

    enqueue(animal){
        animal.setOrder(this.order);
        this.order++;
        if(animal instanceof Dog){
            this.dogs.addToTail(animal);
        }
        else this.cats.addToTail(animal);
    }
   
    dequeueAny(){
        let topOfCats = this.cats.getHead();
        let topOfDogs = this.dogs.getHead();
        if(this.cats.getsize() === 0){
            return this.dequeueDogs();
        }
        else if(this.dogs.getsize() === 0){
            return this.dequeueCats();
        }
        else {
            if(topOfCats.isOlderThan(topOfDogs)){
                return topOfCats;
            }
            else return topOfDogs;
        }
      }
    dequeueCats(){
        return this.cats.poll();
    }
    dequeueDogs(){
        return this.dogs.poll();
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addToTail(node) {
        var current = this.head;
        if (current == null) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
            this.tail = node;
        }

    }

    poll(){ //deleting first node and returning
        var current = this.head;
        this.head = current.next;
        current.next = null;
        return current;
    }

    getHead(){
        return this.head;
    }

    getsize() {
        let current = this.head;
        if (current === null) return 0;
        let size = 1;
        while (current.next != null) {
            current = current.next;
            size++;
        }
        return size;
    }

    printQueue(){
        let current = this.head;
        let str = '';
        while (current != null) {
            str += current.name + ' , ' + current.order + "  --->";
            current = current.next;
        }
        console.log(str);
    }
}

const main1 = () => {
    let shelter = new AnimalQueue();
    shelter.enqueue(new Cat());
    shelter.enqueue(new Cat());
    shelter.enqueue(new Dog());
    shelter.enqueue(new Dog());
    shelter.enqueue(new Cat());
    shelter.enqueue(new Dog());
    shelter.enqueue(new Dog());
    shelter.printShelterAnimals();
    console.log(shelter.dequeueAny());
    console.log(shelter.dequeueDogs());
}

main1();