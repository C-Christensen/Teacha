import * as React from 'react';
import './dropdown.styles.css';


export const Dropdown = () => {

    return (
        <div className="container">
            <form action="/action_page.php">
            <label className="sort">Sort by: </label>
                <select id="sort" name="sort">
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </select>
            </form>
        </div>
    )
}

export default Dropdown;