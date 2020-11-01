import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from '@reach/router';
import Modal from './Modal';
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";


class Details extends React.Component {
  /** super call the constructor here, on the Details class component  **/
  
  constructor(props) {
    super(props);
  
    /** Instantiating the state (init) **/
    this.state = {
      loading: true,
      showModal: false
    };
  }  

  /** new constructor's class Syntax  
   *  only work with .babelrc preset 
   * and NPM package too 
  state = { loading: true };
  **/

  /**  passed to pet a single animal looking for the id */
  componentDidMount() {
  /* throw new Error("We got a problem!");*/

    pet.animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  /** it can also do with redirect **/
  adopt = () => navigate(this.state.url);

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
    const { animal, breed, location, description, name, media, showModal } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>

        <ThemeContext.Consumer>
          {(themeHook) => (
            <button 
              onClick={this.toggleModal}
              style={{ backgroundColor: themeHook[0] }}>
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>


          <p>{description}</p>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <button onClick={this.adopt}>Yes</button>
                    <button onClick={this.toggleModal}>No, I am a Monster</button>
                  </div>
                </div>
              </Modal>
            ) : null
          }
        </div>
      </div>
    );
  }
}

/**  Using the spread operator here cos' we don't care 
 * about what those props are **/
export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

/*export default Details;*/