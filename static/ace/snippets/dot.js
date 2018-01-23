define("ace/snippets/dot", ["require", "exports", "module"], function(
  require,
  exports,
  module
) {
  "use strict";

  exports.snippetText =
    "# Page\n\
snippet page\n\
	${1:from} -> ${2:to}  [label=\"${3:comment}\";]\n\
# Next\n\
snippet --\n\
	-> ${1?:next page}\n\
# Variable\n\
snippet var\n\
	${1:shortname} [label=${2:$1}, shape=${3:|square,rectangle,circle,ellipse,triangle,plaintext,point,diamond,pentagon,hexagon,septagon,octagon,egg,trapezium,parallelogram,house,doublecircle,doubleoctagon,tripleoctagon,invtriangle,invtrapezium,invhouse,Mdiamond,Msquare,Mcircle,none,note,tab,folder,box3d|}${4:, URL=${5:http://en.wikipedia.org/wiki/John de Fries}}]\n\
	${0}\n\
# Graph\n\
snippet graph\n\
	graph [\n\
		labelloc = \"${1:t}\",//ラベル位置 t=top, b=bottom, c=centered\n\
		labeljust = \"${2:c}\",//ラベル位置 r=right-justified, l=left-justified\n\
		bgcolor = \"${3:#0000009}\",\n\
		fontcolor = \"${4:white}\",\n\
		fontsize = ${5:18},\n\
		style = \"${6:filled}\",\n\
		rankdir = ${7:TB},//TB(Top -> Bottom), BT(Bottom -> Top), LR(Left -> Right), RL(Right -> Left)\n\
		margin = ${8:12}\n\
	];\n\
# Node\n\
snippet node\n\
	node [\n\
		shape = ${1:record},\n\
		fontsize = ${2:12},\n\
		rankdir = ${3:TB},\n\
		//TB(Top -> Bottom), BT(Bottom -> Top), LR(Left -> Right), RL(Right -> Left)\n\
	];\n\
# Rank\n\
snippet rank\n\
	{ rank=${1:|same,min,max,# max is bottom|}; ${2:space delimitted list }};\n\
";
  exports.scope = "dot";
});
/*
node [
  shape = record,
  fontname = "Migu 1M",
  fontsize = 12,
];
 */