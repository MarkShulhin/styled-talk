export default `
const Button = styled.button\`
  width: 200px;
  height: 50px;
  margin: 15px;
  border: 2px solid palevioletred;
  color: palevioletred;
  background: #fff;
\`;

const TomatoButton = styled(Button)\`
  color: red;
  border-color: red;
\`

render(
  <div>
    <Button>
      Basic button
    </Button>
    <TomatoButton>
      Tomato button
    </TomatoButton>
  </div>
)
`