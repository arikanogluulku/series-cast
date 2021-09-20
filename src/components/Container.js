import React,{useState,useEffect} from 'react'
import Header from './Header'
import axios from 'axios'
import CharacterList from './CharacterList'
import Search from './Search'
import ThemeButton from './ThemeButton';
import { useTheme } from '../context/ThemeContext'

function Container() {
    const[items,setItems] = useState([])
    const[isLoading,setIsLoading] = useState(true)
    const[filter,setFilter] = useState('')
    const{theme} = useTheme();
    useEffect(() =>{
      const fetchItems = async() =>{
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${filter}`)
        console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
      }
      fetchItems();
    },[filter])
    return (
        <div className={theme}>
        <div className="container">
        <Header/>
        <Search getFilter = {(f) =>setFilter(f)}/>
        <CharacterList isLoading={isLoading} items={items} />
        <ThemeButton/>
        </div>  
        </div>
    )
}

export default Container
