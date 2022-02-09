import './News.css';
import Header from './Header';
import { useState, useContext } from 'react';
import { SearchContext } from '../../App';
import useGoogleSearch from '../../hooks/useGoogleSearch';

// loading logo
import logo from '../../assets/Spinner-1s-200px.gif'

const News = () => {
    const useSearch = useContext(SearchContext);
    const [{ term }, dispatch] = useSearch;
    const [isLoading, setLoading] = useState(true);
    
    const { data } = useGoogleSearch(`q=${term}`, "news", setLoading)

    if (isLoading) {
        return (
            <div className="result-homepage">
                <Header />
                <img src={logo} alt="Loading" className='loading-logo' />
            </div>
        )
    }

    return (
        <div className="news-page">
            <Header />
            {data && (
                
                <div className="news-section">
                    {data.entries.map((item) => (
                        <div className="news-card">
                            <h6 className='news-source'>{item.source.title}</h6>
                            <a href={item.link} className='news-link'>
                                <p className='news-title'>{item.title}</p>
                            </a>
                            <p className='news-publishedDate'>{item.published}</p>
                        </div>
                    ))}
                </div>

            )}
        </div>
    )
}

export default News;