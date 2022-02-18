/* eslint-disable jsx-a11y/anchor-has-content */
import './Videos.css'
import { useContext, useState } from 'react';

import useYtSearch from '../../hooks/useYtSearch';
import { SearchContext } from '../../App';

import Header from './Header';

// Loading logo
import logo from '../../assets/Spinner-1s-200px.gif'

const Videos = () => {
    const [isLoading, setLoading] = useState(false);
    const [{ term }, dispatch] = useContext(SearchContext);
    const { data } = useYtSearch(term, setLoading)

    const baseUrl = 'https://www.youtube.com/watch?v=';

    if (isLoading) return (
        <div className="videosPage">
            <Header />
            <img src={logo} alt="Loading" className='loading-logo' />
        </div>
    )

    return (
        <div className="videosPage">
            <Header />
            {data && (
                <div className="videos-section">
                    <p>
                        {data.pageInfo.totalResults} in 6.034 seconds
                    </p>
                    {data.items.map(item => (
                        <div className="videos">
                            <h6 style={{margin:"0px"}}>www.youtube.com &gt; watch</h6>
                            <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
                                <p className='videos-title'>
                                    {item.snippet.title}
                                </p>
                            </a>
                            <div className="videos-details">
                                <img src={item.snippet.thumbnails.medium.url} alt="" />
                                <div className="video-description">
                                    <p style={{fontSize:"1rem"}}>{item.snippet.description}</p>
                                    <p style={{fontSize:"1.20rem"}}>Youtube . {item.snippet.channelTitle} . {item.snippet.publishTime}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Videos;