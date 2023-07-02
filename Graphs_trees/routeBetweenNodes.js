
import Graph from "../Graphs_trees/Graph.js";
import Queue from '../Queue/Queue.js';
const routeBetweenNodes = (graph,s, t) => {
    var visited = {};
    var q = new Queue();
    visited[s] = true;
    q.enqueue(s);
    while(!q.isEmpty()){
        let n = q.dequeue();
        let list = graph.adjList.get(n);
        for(let i in list){
            let node = list[i];
            if(!visited[node]){
                if(node === t){
                    return true;
                }
                visited[node] = true;
                q.enqueue(node);
            }
        }
    }
    return false;
}

const main = () =>{
    let myGraph = new Graph();
    myGraph.addVertex(5);
    myGraph.addVertex(1);
    myGraph.addVertex(2);
    myGraph.addVertex(3);
    myGraph.addEdge(3,1);
    myGraph.addEdge(3,5);
    myGraph.addEdge(5,2);
    console.log(routeBetweenNodes(myGraph,5,1));
}

main();