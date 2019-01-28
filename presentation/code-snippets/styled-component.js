export default `
// Logic stored as a function(aka mixin)
const getPrimary = (props) => props.primary && css\`
  background: palevioletred;
  color: white;
\`;

// font size uses inline function
const Button = styled.button\`
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: \${props => props.fontSize || '28px'}; 
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  \${getPrimary}

  //@media (min-width: 720px) {
  //  border-radius: 25px;
  //}
\`;

const Container = styled.div\`
  //\${Button}:hover {
  //  color: green;
  //}
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
\`;

render(
  <Container>
    {/*<button>html button</button>*/}
    <Button>
      Normal button
    </Button>
    <Button primary fontSize="33px">
      Primary button
    </Button>
  </Container>
)
`