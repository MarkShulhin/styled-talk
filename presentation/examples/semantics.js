export default `
// BEM
<ol className="list">
  <li className="list list--item">
    <span className="list list--first-name">Foo</span>
    <span className="list list--last-name">Bar</span>
  </li>
</ol>

// styled-components
<PersonList>
  <PersonListItem>
    <PersonFirstName>Foo</PersonFirstName>
    <PersonLastName>Bar</PersonLastName>
  </PersonListItem>
</PersonList>
`;
