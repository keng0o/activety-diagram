define("ace/snippets/dot", ["require", "exports", "module"], function(
  require,
  exports,
  module
) {
  "use strict";

  exports.snippetText =
    "# Page\n\
snippet page\n\
	${1:ページ名} -> ${2:遷移先ページ}\n\
# Function\n\
snippet func\n\
	function ${1?:function_name}(${2:argument}) {\n\
		${3:// body...}\n\
  }\n\
# tertiary conditional\n\
snippet ter\n\
	${1:/* condition */} ? ${2:a} : ${3:b}\n\
# docstring\n\
snippet /**\n\
	/**\n\
	 * ${1:description}\n\
	 *\n\
	 */\n\
snippet @par\n\
regex /^\\s*\\*\\s*/@(para?m?)?/\n\
	@param {${1:type}} ${2:name} ${3:description}\n\
snippet @ret\n\
	@return {${1:type}} ${2:description}\n\
# Next\n\
snippet --\n\
  -> ${1?:next page}\n\
# Next\n\
snippet --\n\
	-> ${1?:next page}\n\
";
  exports.scope = "dot";
});
