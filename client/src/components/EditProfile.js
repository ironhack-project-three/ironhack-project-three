import React from 'react';

export default function EditProfile(props) {
    const {username} = props
    return (
        <section className="hero has-background-white-ter is-fullheight">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form action="/users/login" method="POST" className="box" onSubmit={handleLoginSubmit}>
                            <h3 className="title is-3">Edit your profile</h3>
                                <div className="field">
                                    <label for="email" className="label">Username</label>
                                        <div className="control has-icons-left">
                                            <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="" 
                                            className="input" 
                                            value={username} 
                                            onChange={}
                                            required
                                            ></input>
                                        </div>
                                </div>   
                                <div className="field">
                                    <label for="email" className="label">Email</label>
                                        <div className="control has-icons-left">
                                            <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="" 
                                            className="input" 
                                            value={email} 
                                            onChange={}
                                            required
                                            ></input>
                                        </div>
                                </div>
                                <div className="field">
                                    <label for="password" className="label">Password</label>
                                        <div className="control has-icons-left">
                                            <input 
                                            type="password" 
                                            name="password" 
                                            placeholder="" 
                                            className="input" 
                                            value={password} 
                                            onChange={} 
                                            required
                                            ></input>
                                        </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}