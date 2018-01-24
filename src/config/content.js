export default `
a [label = "<pl>left|center|<pr>right"];
b [label = "<pl>left|<pc>center|<pr>right"];
c [label = "left|center|<pr>right"];
d [label = "{left|{<pc>center|{top|middle|bottom}}|right}}"];
e [label = "{top|<pm>middle|bottom}"];

// edge define
a:pl -> b:pl [ label = "a-b", weight = 2.0];
a:pr -> c:pr [label = "a-g", weight = 1.0];
b:pc -> e:pm [label = "b-e"];
c -> d:pc [label = "g-d"]
triangle [label = "triangle", shape = triangle];
plaintext [label = "plaintext", shape = plaintext];
plain [label = "plain", shape = plain];
diamond [label = "diamond", shape = diamond];
trapezium [label = "trapezium", shape = trapezium];
parallelogram [label = "parallelogram", shape = parallelogram];
house [label = "house", shape = house];
house [label = "house", shape = house];
ellipse [label = "ellipse", shape = ellipse];
aval [label = "oval", shape = oval];
circle [label = "circle",shape = circle];
point [label = "point", shape = point];
egg [label = "egg", shape = egg];
`;
/*
export default `
subgraph cluster_0 {
style=filled;
color=lightgrey;
node [style=filled,color=white];
a0 -> a1 -> a2 -> a3;
label = "process #1";
}

subgraph cluster_1 {
node [style=filled];
b0 -> b1 -> b2 -> b3;
label = "process #2";
color=blue
}
start -> a0;
start -> b0;
a1 -> b3;
b2 -> a3;
a3 -> a0;
a3 -> end;
b3 -> end;

start [shape=Mdiamond];
end [shape=Msquare];
`;
*/
