export default `
function Welcome(props) {
  return (
    <h1 style={{ color: props.color}}>
      Hello, {props.name}
    </h1>
  );
}
  
render(
 <Welcome name="EPAM" color="black"/>
);
`;
