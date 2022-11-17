var traverseDomAndCollectElements = function (
  matchFunc,
  startEl = document.body
) {

  var resultSet = [];

  // if (typeof startEl === "undefined") {
  //   startEl = document.body;
  // }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);
  //revisar o recorremos los hijos del body con recursión
  for (let i = 0; i < startEl.children.length; i++) {
    let resultado = traverseDomAndCollectElements(
      matchFunc,
      startEl.children[i]
    );
    resultSet = resultSet.concat(resultado);
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  //'div' || '.class' || '#id' || 'tag.class'
  // tu código aquí
  if (selector[0] === "#") return "id";
  else if (selector[0] === ".") return "class";
  for (let i = 0; i < selector.length; i++) {
    if (selector[i] === ".") return "tag.class";
  }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  //'div' || '.class' || '#id' || 'tag.class'
  var selectorType = selectorTypeMatcher(selector); //'id' || 'class' || 'tag.class' || 'tag'
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (elem) => "#" + elem.id === selector;
  } else if (selectorType === "class") {
    matchFunction = (elem) => {
      for (let i = 0; i < elem.classList.length; i++) {
        if ("." + elem.classList[i] === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (elem) => {
      const [t, c] = selector.split("."); // 'span.blueClass' --> ['span', 'blueClass']
      //hora de aplicar la recursión
      return matchFunctionMaker(t)(elem) && matchFunctionMaker("." + c)(elem);
    };
  } else if (selectorType === "tag") {
    matchFunction = (elem) =>
      elem.tagName.toLowerCase() === selector.toLowerCase();
  }
  return matchFunction;
};

var $ = function (selector) {
  //'div' || '.class' || '#id' || 'tag.class'
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};