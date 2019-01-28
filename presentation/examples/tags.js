export default `
const name = 'Dave'
const position = '10th'
const number = 5
 
function getMessage(literals, ...rest) {
  console.log(literals)
  console.log(rest)
  return
}

getMessage\`Hello \${ name }, you are \${ position } in queue \${ number }.\`
 
---
 
// ['Hello ', ', you are ', 'in queue ', '.']
// ['Dave', '10th', 5]
`;