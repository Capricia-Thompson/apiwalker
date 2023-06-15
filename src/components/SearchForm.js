import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = (props) => {
    let { selected, setSelected } = props;
    let [type, setType] = useState("people")
    let [id, setID] = useState("1")
    const navigate = useNavigate()

    const fetchData = (type, id) => {
        fetch(`https://swapi.dev/api/${type}/${id}/`).then(response => response.json()
        ).then(response => {
            console.log(response)
            setSelected(response);
            if (response.detail) {
                return navigate('/error')
            } else { navigate(`/${type}`) }

        })
    }
    const typeChangeHandler = (e) => {
        setType(e.target.value)
    }
    const idChangeHandler = (e) => {
        setID(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        fetchData(type, id)
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Search for:</label>
                <select onChange={typeChangeHandler}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div>
                <label>ID:</label>
                <input type="text" onChange={idChangeHandler} />
            </div>
            <input type="submit" value="Search" />
        </form>
    )
};

export default SearchForm;