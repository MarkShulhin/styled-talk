export default `
const getPrimary = ({ primary }) => primary && css\`
  background: palevioletred;
  color: white;
\`;

const Button = styled.button\`
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 28px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  \${getPrimary}
\`;

const Container = styled.div\`
  text-align: center;
\`;

render(
  <Container>
    <Button>
      Normal button
    </Button>
    <Button primary>
      Primary button
    </Button>
  </Container>
)
`