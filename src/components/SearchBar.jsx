import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

function SearchBar() {

    const searchBar = ({ onSearch, handleSearch, searchQuery, setSearchQuery }) => {
        const [searchQuery, setSearchQuery] = useState('');

        const handleSearch = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.get(`https://exo-app-rest-api.adaptable.app/places`);
                onSearch(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className='header-footer-bg'>
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
        </div>
    )
}

export default SearchBar;