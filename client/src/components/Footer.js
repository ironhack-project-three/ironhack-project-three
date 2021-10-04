import React from 'react'
import { Footer as BulmaFooter } from 'react-bulma-components'

export default function Footer() {
    return (
        <BulmaFooter>
            <div>
                <p>&copy; 2021</p>    
            </div>
            <div>
                <h2>Footer</h2>
                <ul className="is-flex-direction-row is-flex">
                    <li>Jessé Vermeulen</li>
                    <li>Mathijs van Ginneken</li>
                    <li>Cooper Bjorkelund</li>
                    <li>Thea de Jong</li>
                </ul>
            </div>
        </BulmaFooter>
    )
}
