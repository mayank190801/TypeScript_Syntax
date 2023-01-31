"use strict";
function findCenter(edges) {
    //so any number repeat twice will be the answer
    const items = new Set();
    for (let i = 0; i < edges.length; i++) {
        //coding crazily - open source contributer --
        if (items.has(edges[i][0]))
            return edges[i][0];
        if (items.has(edges[i][1]))
            return edges[i][1];
        items.add(edges[i][0]);
        items.add(edges[i][1]);
    }
    return -1;
}
