import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

/**
 * NOTE that the API connect is already handled on the @frontendmasters/pet
 *   => we do just change the location for:
 *    Seattle, WA or San Francisco, CA  
 *    => it's just One developer key here
 */

const SearchParams= () => {
  const [ location , setLocation ] = useState('Seattle, WA');

  const [ breeds, setBreeds ] = useState([]);
  const [ animal, AnimalDropdown ] = useDropdown("Animal", "Dog", ANIMALS);
  const [ breed, BreedDropdown, setBreed ] = useDropdown("Breed", "", breeds);
  const [ pets, setPets ] = useState([]);

  /**  Garantee to have a Promise  **/
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed, 
      type: animal
    });

    /** Get Animals OR empty array **/
    setPets(animals || []);
  }


  /**
  * useEffect() is gonna take the place of the "Lifecycle Hook"
   *    componentWillAmount(), 
   *    componentDidMount() &
   *    componentDidUpdate()
   * 
   * useEffect() is disconnect to when the render happen
   *  1st Search Params run then the render 
   *   => After that, useEffect() is going to run (async)
   *  ==> we want to show something first 
   *      Then try the api req data  
   */
  useEffect(() => {
    setBreeds([]); /* when this run we setBreeds Array to 0 */
    setBreed(""); /* string too, cos' cat & dog don't have same breed */

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds ]);  
  /** right above, the deps list in the array...
   * esLint demand to set setBreeds, setBreed 
   * even we know ti do not gonna change 
   *  but its still depend on them 
   * 
   * ==> so , if one of these things change , then render and rerun */

  return (
    <div className="search-params" >
      <form onSubmit={e => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input 
            id="location" 
            value={location} 
            placeholder="Location" 
            onChange={e => setLocation(e.target.value)} 
          />
        </label>
        
         <AnimalDropdown />
         <BreedDropdown />

        <button>Submit</button>

      </form>
    </div>
  );
}

export default SearchParams;