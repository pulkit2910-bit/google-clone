import './Images.css'
import Header from './Header';
import { useContext, useState } from 'react';
import { SearchContext } from '../../App';
import useGoogleSearch from '../../hooks/useGoogleSearch';

// Loading logo
import logo from '../../assets/Spinner-1s-200px.gif'

const Images = () => {
    const [{ term }, dispath] = useContext(SearchContext);
    const [isLoading, setLoading] = useState(true);

    const { data } = useGoogleSearch(`q=${term}`, "images", setLoading);
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
        <div className="images-Page">
            <Header />
            {data && (

                <div className="images-section">
                    {data.image_results.map(item => (
                        <a href={item.link.href}>
                            <img src={item.image.src} alt="" />
                        </a>
                    ))}
                </div>

            )}
        </div>
    )
}

export default Images;