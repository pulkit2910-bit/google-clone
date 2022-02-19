import './ResultHome.css'
import Header from './Header'
import { useContext, useState } from "react";
import { SearchContext } from "../../App";
import useGoogleSearch from '../../hooks/useGoogleSearch'

// Loading logo
import logo from '../../assets/Spinner-1s-200px.gif'

// MOCK API CALL
// import res from '../../response'

const ResultHome = () => {
    const [{ term }] = useContext(SearchContext); // here will be the value from SearchContext.Provider
    const [isLoading, setLoading] = useState(true);
    // LIVE API CALL
    const { data } = useGoogleSearch(`q=${term}&num=40`, "search", setLoading);

    // MOCK API CALL FROM response.js
    // const data = res;
    console.log(data);

    if (isLoading) {
        return (
            <div className="result-homepage">
                <Header />
                <img src={logo} alt="Loading" className='loading-logo' />
            </div>
        )
    }

    return (
        <div className="result-homepage">
            <Header />
            {data && (
                <div className='result-section'>
                    <p>
                        {data.total} results in {data.ts.toPrecision(4)} seconds
                    </p>
                    {data.results.map(item => (
                        <div className='search-results'>
                            <a href={item.link}className="result-displayLink">
                                {item.cite.domain}
                            </a>
                            <a href={item.link} className="result-link">{item.title}</a>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ResultHome;