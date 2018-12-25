export default `
// Create the keyframes
const rotation = keyframes\`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
\`;

const Rotate = styled.div\`
  display: inline-block;
  animation: \${rotation} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
\`;

render(
  <Rotate>&lt; 💅 &gt;</Rotate>
);
`