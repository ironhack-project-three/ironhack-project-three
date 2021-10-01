import React from 'react'

export default function UserLogin() {
    return (
        <section className="hero has-background-white-ter is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div column is-5-tablet is-4-desktop is-3-widescreen>
                            <form action="POST" className="box">
                                <h3 className="title is-3">Login</h3>
                                <div className="field">
                                    <label for="" className="label">Email</label>
                                    <div className="control has-icons-left">
                                    <input type="email" placeholder="e.g. your_email@Vinevibe.com" className="input" required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label for="" className="label">Password</label>
                                    <div class="control has-icons-left">
                                        <input type="password" placeholder="********" className="input" required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                    <div className='field'>
                                        <a href="">Forgot Password</a>
                                    </div>
                                    <div className="field">
                                        <button className="button is-warning is-rounded">Login</button>
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
