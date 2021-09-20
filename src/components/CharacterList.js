import React from 'react'
import CharacterCard from './CharacterCard'
import Spinner from './Spinner'
function CharacterList({items,isLoading}) {
    return  isLoading ? 
    <Spinner/>:
    <section className="cards">
        {items.map(item => (
            <CharacterCard key={item.char_id} item = {item} /> 
        ))}
    </section>
    
    
    
}

export default CharacterList
