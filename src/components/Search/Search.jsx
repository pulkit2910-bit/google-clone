import "./Search.css"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../App";

// Material UI
import { Button } from '@mui/material';

// Material UI icons
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = ({hideButtons = false}) => {
    const useSearch = useContext(SearchContext);
    const [{ term }, dispatch] = useSearch;
    const [input, setInput] = useState("");

    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();

        dispatch({
            // type: actionTypes.set_search_term,
            term: input
        })
        navigate('/search')
    }

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon onClick={search} className="search-btn" />
                <input className="input" type="text" value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon className="search-btn" />
            </div>

            {
                hideButtons ? 
                <div className="search_hideButtons">
                    <Button variant='contained' type='submit' onClick={search}>Google Search</Button>
                    <Button variant='contained'>I'm Feeling Lucky</Button>
                </div>
                :
                <div className="search_buttons">
                    <Button variant='contained' type='submit' onClick={search}>Google Search</Button>
                    <Button variant='contained'>I'm Feeling Lucky</Button>
                </div>
            }

        </form>
    )
}

export default Search;