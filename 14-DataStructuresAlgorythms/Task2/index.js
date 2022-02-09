// Weighted graph = a graph whose edges have weights

// If there is no edge between node i and node j, the value of the array element a[i][j] = some very large value
// Otherwise, a[i][j] is a floating value that is equal to the weight of the edge (i, j)

class Graph {
    constructor(size = 1) {
      this.size = size;
      this.matrix = [];
      for (let i = 0; i < size; i++) {
        this.matrix.push([]);
        for (let j = 0; j < size; j++) {
          this.matrix[i][j] = 0;
        }
      }
    }
    addEdge(vertex1, vertex2, weight = 1) {
      if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
        console.log("invalid vertex");
      } else if (vertex1 === vertex2) {
        console.log("same vertex");
      } else {
        this.matrix[vertex1][vertex2] = weight;
        this.matrix[vertex2][vertex1] = weight;
      }
    }
    addNode() {
      this.size++;
      this.matrix.push([]);
      for (let i = 0; i < this.size; i++) {
        this.matrix[i][this.size - 1] = 0;
        this.matrix[this.size - 1][i] = 0;
      }
    }
    printMatrix() {
      for (let i = 0; i < this.size; i++) {
        let row = "";
        for (let j = 0; j < this.size; j++) {
          row += ` ${this.matrix[i][j]}`;
        }
        console.log(row);
      }
    }
  
    cloneGrid() {
      const newGrid = [...this.matrix];
      newGrid.forEach((row, rowIndex) => (newGrid[rowIndex] = [...row]));
      return newGrid;
    }
  
    floydWarshall(sizeOfGraph) {
      for (let k = 0; k < sizeOfGraph; k++) {
        for (let i = 0; i < sizeOfGraph; i++) {
          for (let j = 0; j < sizeOfGraph; j++) {
            // We cannot travel through edge that doesn't exist
            if (dis[i][k] == INF || dis[k][j] == INF) continue;
            if (dis[i][j] > dis[i][k] + dis[k][j]) {
              dis[i][j] = dis[i][k] + dis[k][j];
              Next[i][j] = Next[i][k];
            }
          }
        }
      }
    }
    // Function construct the shortest path between u and v
    constructPath(u, v) {
      // If there's no path between node u and v, simply return an empty array
      if (Next[u][v] == -1) return null;
      // Storing the path in a vector
      let path = [];
      path.push(u);
      while (u != v) {
        u = Next[u][v];
        path.push(u);
      }
      console.log(path);
  
      return path;
    }
  }
  let MAXN = 100;
  let INF = 1e7;
  let dis = new Array(MAXN);
  let Next = new Array(MAXN);
  for (let i = 0; i < MAXN; i++) {
    dis[i] = new Array(MAXN);
    Next[i] = new Array(MAXN);
  }
  // Initializing the distance and Next array
  function initialise(sizeOfGraph, graph) {
    for (let i = 0; i < sizeOfGraph; i++) {
      for (let j = 0; j < sizeOfGraph; j++) {
        dis[i][j] = graph[i][j];
        // No edge between node i and j
        if (graph[i][j] == INF) Next[i][j] = -1;
        else Next[i][j] = j;
      }
    }
  }
  // Print the shortest path
  function printPath(path) {
    let n = path.length;
    for (let i = 0; i < n - 1; i++) document.write(path[i] + " -> ");
    document.write(path[n - 1] + "<br>");
  }
  const sizeOfGraph = 10;
  
  let graph = new Graph(sizeOfGraph);
  
  initialise(sizeOfGraph, graph.matrix);
  
  graph.floydWarshall(sizeOfGraph);
  
  let path;
  // Path from node 1 to 3
  document.write("Shortest path from 1 to 3: ");
  path = graph.constructPath(1, 2);
  printPath(path);
  // Path from node 0 to 2
  document.write("Shortest path from 0 to 2: ");
  path = graph.constructPath(0, 5);
  printPath(path);
  // Path from node 3 to 2
  document.write("Shortest path from 3 to 2: ");
  
  path = graph.constructPath(3, 2);
  printPath(path);
  
  
  graph.addEdge(1, 3, 5);
  graph.addEdge(1, 4, 5);
  graph.addEdge(2, 4, 2);
  graph.addEdge(2, 3, 3);
  graph.addNode();

  graph.printMatrix();
 