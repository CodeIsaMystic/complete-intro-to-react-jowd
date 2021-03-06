import React from "react";
import Pet from "./Pet";


/**
 * ONE WAY DATA FLOW (this a React key pattern)
 * 
 * From the Pet parent, we're searching on
 * here we're passing out to the child Results component 
 * 
 * => the child doesn't effect his parent
 *  ==> simplier to debugg
 */
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
        ) : (
          pets.map(pet => {
            return (
              <Pet 
                animal={pet.type} 
                key={pet.id} 
                name={pet.name}
                breed={pet.breeds.primary}
                media={pet.photos}
                location={`${pet.contact.address.city}, ${
                pet.contact.address.state
                }`}
                id={pet.id}
              />
              );
            })
        )}
    </div>
  );
};

export default Results;