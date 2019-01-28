export default `
import React from 'react'
import {render} from 'react-dom'
import injectSheet from 'react-jss'

const styles = {
  myButton: {
    color: 'green',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      fontWeight: 'bold'
    }
  }
}

const Button = ({classes, children}) => (
  <button className={classes.myButton}>{children}</button>
)

const StyledButton = injectSheet(styles)(Button)

const App = () => <StyledButton>Submit</StyledButton>

render(<App />, document.getElementById('root'))
`;
