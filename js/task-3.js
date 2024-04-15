function getElementWidth(content, padding, border) {
 const contentNum = parseFloat(content);
 const paddingNum = parseFloat(padding);
 const borderNum = parseFloat(border);
 const totalWidth = contentNum + 2 * (paddingNum + borderNum);
 return totalWidth;  
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200