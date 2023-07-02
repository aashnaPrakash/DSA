import Queue from '../Queue/Queue.js';
export default class Graph{
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    addVertex(v){
        this.adjList.set(v, []);
    }
    addEdge(v, w){
        this.adjList.get(v).push(w);
        //this.adjList.get(w).push(v);//uncomment for undirected
    }
    printGraph(){
        let nodes = this.adjList.keys();
        for(let i of nodes){
            let vals = this.adjList.get(i);
            var c = '';
            for(let j=0;j<vals.length;j++){
                c += vals[j] + " ";
            }
            console.log(i +"--->"+ c);
        }
    }
 
    bfs(v){
        var visited = {};
        var q = new Queue();
        visited[v] = true;
        q.enqueue(v);
        while(!q.isEmpty()){
            var node = q.dequeue();
            console.log(node);
            let list=this.adjList.get(node);
            for(let i in list){
                let neighbour = list[i];
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    q.enqueue(neighbour);
                }
            }
        }
    }
    
    dfs(v){
        var visited = {};
        this.runDFS(v, visited); 
    }

    runDFS(v, visited){
        if(this.adjList.get(v).length === 0){
            return;
        }
        else {
            this.visit(v);
            visited[v] = true;
            this.adjList.get(v).forEach(node => {
                if(!visited[node]){
                    this.runDFS(node, visited);
                }
            })
        }
    }

    visit(v){
        console.log(v);
    }
}

const main = () => {
    let myGraph = new Graph();
    myGraph.addVertex(5);
    myGraph.addVertex(1);
    myGraph.addVertex(2);
    myGraph.addVertex(3);
    myGraph.addEdge(3,1);
    myGraph.addEdge(3,5);
    myGraph.addEdge(5,2);
    myGraph.printGraph();
    console.log("*****");
    myGraph.dfs(3);
    console.log("*****");
    myGraph.bfs(3);
    console.log("*****");
}
main();

