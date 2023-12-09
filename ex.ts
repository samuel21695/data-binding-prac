type ElementAttributes = Record<string, string>;

function component(element:string, attributes?: ElementAttributes, children?:string[]): string {
  let elementStr = `<${element}`;
  for (let key in attributes) {
    elementStr += `${key}="${attributes[key]}"`;
  }
  elementStr += '>';
  if (children) {
    children.forEach((child) => {
        elementStr += child;
    });
    elementStr += `</${element}>`;
  }
  return elementStr
}

const resultValue = component('h1', { id: "example", class: "active", style: "color:salmon;"}, ["내이름"])

console.log(resultValue);