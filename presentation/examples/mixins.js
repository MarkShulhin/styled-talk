export default `
// SASS
@mixin grid($flex) {
  @if $flex {
      display: flex;
  } @else {
      display: block;
  }
}

.button {
  @include grid(true);
}

// styled-components
const grid = (props) => css\`
 display: \${props.isFlex ? 'flex' : 'block'};
\`

const Button = styled.button\`
  \${grid}
\`

// usage
<Button flex={true} />
`