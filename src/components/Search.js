import React,{useState} from 'react'

function Search ({getFilter}) {
    const [text,setText] =useState('')
    
    const onChange = (f) =>{
        setText(f)
        getFilter(f) 
    }

    return (
       <section className="search">
            <form>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Search Characters..."
                value={text}
                onChange={(e) => onChange(e.target.value) }
                autoFocus
                />
            </form>
       </section>
    )
}

export default Search
