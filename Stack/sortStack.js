//allowed to use one temporary stack
import {Stack} from './stack.js';
const sortStack = (st) => {
    let temp = new Stack();
    var top;
    while(!st.isEmpty()){
        top = st.pop();
        while(!temp.isEmpty() && top < temp.peek()){
            st.push(temp.pop());
        }
        temp.push(top);
    }
    while(!temp.isEmpty()){
        st.push(temp.pop());
    }
    return st;
}

const main1 = ()=>{
    let st = new Stack();
    st.push(9);
    st.push(7);
    st.push(88);
    st.push(2);
    st.push(15);
    st.push(1);
    st.printStack();
    console.log(sortStack(st));
}

main1();