import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  /** super call the constructor here, on the Details class component  **/
  /*
  constructor(props) {
    super(props);
  */  
    /** Instantiating the state (init)
    this.state = {
      loading: true
    };
  }  */

  /** new constructor's class Syntax  **/
  state = { loading: true };


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
     * )     **/

    if(this.state.loading) {
      return <h1>loading...</h1>
    }

    /**  Destructuring  **/
    const { animal, breed, location, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;