import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function AddWine() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [variety, setVariety] = useState('');
    const [region, setRegion] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [winery, setWinery] = useState('');
    
    const history = useHistory();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {title, description, price, variety, region, province, country, winery};
    

    try{const response = await axios.post("./create-wine", body);
    console.log(response);

    setTitle('');
    setDescription('');
    setPrice('');
    setVariety('');
    setRegion('');
    setProvince('');
    setCountry ('');
    setWinery ('');

    history.push('./wines')}
    catch(error){
    console.log(error);
    }

}
    return ( 
        <section className="hero has-background-white-ter is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" onSubmit={handleSubmit}>
                                <h3 className="is-3">Add new wine</h3>
                                <div className="field">
                                    <label>Title</label>
                                    <div className="control has-icons-left">
                                    <input 
                                        type="text" 
                                        name="title" 
                                        placeholder="Title" 
                                        className="input" 
                                        value={title} 
                                        onChange={(e) => setTitle(e.target.value)}>
                                        </input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Description</label>
                                    <div className="control has-icons-left">
                                    <input 
                                        type="text" 
                                        name="title" 
                                        placeholder="Title" 
                                        className="input" 
                                        value={description} 
                                        onChange={(e) => setDescription(e.target.value)}></input>
                                    </div>
                                </div> 
                                <div className="field">
                                    <label>Price</label>
                                    <div className="control has-icons-left">
                                    <input 
                                        type="number" 
                                        name="price" 
                                        placeholder="Price" 
                                        className="input" 
                                        value={price} 
                                        onChange={(e) => setPrice (e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Variety</label>
                                    <div className="control has-icons-left">
                                    <input 
                                        type="text" 
                                        name="variety" 
                                        placeholder="Variety" 
                                        className="input" 
                                        value={variety} 
                                        onChange={(e) => setVariety (e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Region</label>
                                    <div className="control has-icons-left">
                                    <input 
                                        type="text" 
                                        name="region" 
                                        placeholder="Region" 
                                        className="input" 
                                        value={region} 
                                        onChange={(e) => setRegion (e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Province</label>
                                    <div className="control has-icons-left">
                                    <input 
                                        type="text" 
                                        name="province" 
                                        placeholder="Province" 
                                        className="input" 
                                        value={province} 
                                        onChange={(e) => setProvince (e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Country</label>
                                    <div className="control has-icons-left">
                                    <input 
                                        type="text" 
                                        name="country" 
                                        placeholder="Country" 
                                        className="input" 
                                        value={country} 
                                        onChange={(e) => setCountry (e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Winery</label>
                                    <div className="control has-icons-left">
                                    <input 
                                        type="text" 
                                        name="winery" 
                                        placeholder="Winery" 
                                        className="input" 
                                        value={winery} 
                                        onChange={(e) => setWinery (e.target.value)}></input>
                                    </div>
                                </div>
                                    <div className="field">
                                        <button className="button is-warning is-rounded" type="submit">Add wine</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}