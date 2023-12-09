function component(element, attributes, children) {
  let elementStr = `<${element}`;
  for (let key in attributes) {
    elementStr += `${key}="${attributes[key]}"`;
  }
  elementStr += '>';
  if (children) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        elementStr += child;
      } else {
        elementStr += component(child.element, child.attributes, child.children);
      }
    });
    elementStr += `</${elementNode}>`;
    return elementStr
  }
}

const resultValue = component('h1', { id: "example", class: "active", style: "color:salmon;"}, ["내이름"])

console.log(resultValue);