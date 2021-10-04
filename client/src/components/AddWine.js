import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function addWine() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("0");
    const [variety, setVariety] = useState('');
    const [region, setRegion] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [winery, setWinery] = useState('');
    
    
    const history = useHistory();


    const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {title, description, price, variety, region, province, country, winery};
    

    try{const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
    console.log(response);
//Reset the state of the form fields!
setTitle('');
setDescription('');
setPrice('');
setvariety('');
setRegion('');
etProvince('');
setCountry ('');
setWinery ('');

//redirect user
history.push('/wines')}
catch(error){
console.log(error);
}

}

    return ( 
        <section className="hero has-background-white-ter is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div column is-5-tablet is-4-desktop is-3-widescreen>
                            <form onSubmit={handleSubmit}>
                                <h3 className="title is-3">Add new wine</h3>
                                <div className="field">
                                    <label>Title</label>
                                    <div className="control has-icons-left">
                                    <input 
                                        type="text" 
                                        name="title" 
                                        placeholder="Title" 
                                        className="input" 
                                        value={title} 
                                        onChange={(e) => setName(e.target.value)}></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
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
                                        value={title} 
                                        onChange={(e) => setName(e.target.value)}></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                    <div className='field'>
                                        <a href="">Forgot Password</a>
                                    </div>
                                    <div className="field">
                                        <button className="button is-warning is-rounded" type="submit">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


  <div className="AddWine">
  <Header/>
      <h3>Add New Beer</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        <label>description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>first brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirst_brewed(e.target.value)}
          value={first_brewed}
        />
        <label>attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuation_level(e.target.value)}
          value={attenuation_level}
        />

        <label>contributed by</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributed_by(e.target.value)}
          value={contributed_by}
        />
        
        <button type="submit">Create new Beer</button>
        
      </form>
    </div>
    )
}





