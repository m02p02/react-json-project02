import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [negResults, setNegResults] = useState(false);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://exo-app-rest-api.adaptable.app/places?search=${searchQuery}`);
            if (response.data.length > 0) {
                setSearchResults(response.data);
                setNegResults(false);
            }
            else {
                setSearchResults([]);
                setNegResults(true);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleDestinationClick = (placeId) => {
        navigate(`/places/${placeId}`);
    };

    return (
        <div className='header-search'>
            <Form inline onSubmit={handleSearch}>
                <FormControl
                    type='text'
                    placeholder='Search'
                    className='header-search-bar'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit'>Search</button>
            </Form>

            {noResults ? (
                <p>No results found.</p>
            ) : (
                searchResults.length > 0 && (
                    <div>
                        <p>Search Results:</p>
                        <ul>
                            {searchResults.map((result) => (
                                <li key={result.id}>
                                    <Link
                                        to={`/places/${result.id}`}
                                        onClick={() => handleDestinationClick(result.id)}
                                    >
                                        {result.placeName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            )}
        </div>
    )
}

export default SearchBar;