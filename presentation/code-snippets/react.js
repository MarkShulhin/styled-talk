export default `
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}
    </h1>
  );
}
  
render(
 <Welcome name="EPAM" />
);
`;
