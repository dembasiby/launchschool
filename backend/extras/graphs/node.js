class Node {
  constructor(index, label = null) {
    this.index = index;
    this.edges = {};
    this.label = label;
  }

  numEdges() {
    return Object.keys(this.edges).length;
  }

  getEdge(neighbor) {
    if (neighbor in this.edges) {
      return this.edges[neighbor];
    }
    return null;
  }
}

export default Node;
