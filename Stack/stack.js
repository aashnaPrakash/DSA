export class Stack {
    constructor(){
        this.items = [];
        this.minimum = null;
    }

    push(item){
        this.items.push(item);
        if(this.items.length === 1) this.minimum = item;
        else this.updateMin(item);
    }
    pop(){
        if(!this.isEmpty()) return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0;
    }

    printStack(){
        let str = '';
        let i=0;
        while(i<this.items.length){
            str = str+ this.items[i] + ' ';
            i++;
        }
        console.log(str);
    }

    updateMin(item){
        if(item < this.minimum){
            this.minimum = item;
        }
    }

    getMin(){
        return this.minimum;
    }

}

const main = () => {
    let st = new Stack();
    st.push(9);
    st.push(7);
    st.push(88);
    console.log(st.getMin());
    st.push(2);
    st.push(15);
    console.log(st.getMin());
}

main();