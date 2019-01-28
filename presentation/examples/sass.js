export default `
// .scss
.c-card {
  display: inline-block;
  width: 100%;
  // ...

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 20px -15px rgba(0, 0, 0, 0.3);
  }

  &__header {
    //..
  }
  
  &__image {
    max-width: 100%;
  }
 
  &__body {
    padding: 20px;
  }
    
  &__title {
    //..  
  }
  ....
}
`