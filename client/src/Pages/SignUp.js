import React from 'react'

export default function SignUp() {
    return (
        <section className="hero has-background-white-ter is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div column is-5-tablet is-4-desktop is-3-widescreen>
                            <form action="" method="POST" className="box">
                                <h3 className="title is-3">Sign up</h3>
                                <div className="field">
                                    <label for="username" className="label">Username</label>
                                    <div className="control has-icons-left">
                                        <input for="username" type="username" placeholder="Vinevibe" className="input" required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label for="email" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input for="email" type="email" placeholder="e.g. your_email@Vinevibe.com" className="input" required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label for="password" type="password" className="label">Password</label>
                                    <div class="control has-icons-left">
                                        <input type="password" placeholder="********" className="input" required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                    <div className='field'>                      
                                    </div>
                                    <div className="field">
                                        <button className="button is-warning is-rounded">Sign up</button>
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
