import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  /** super call the constructor here, on the Details class component  **/
  constructor(props) {
    super(props);
    
    /** Instantiating the state (init)  */
    this.state = {
      loading: true
    };
  }


  /**  passed to pet a single animal looking for the id */
  componentDidMount() {
    pet.animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city},
          ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      }, console.error);
  }
  
  render() {

    /** Debugging Trick
     *  preformatted, code for code, & JSON stringify
     *  it's a way to see everything's coming from the router
     * 
     * return (
     *    <pre>
     *      <code>{JSON.stringify(props, null, 4)}</code>
     *    </pre>    
     * )
     * 
     **/
    return (
    );
  }
}

export default Details;