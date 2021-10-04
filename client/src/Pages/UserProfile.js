import React from 'react';
import Tabs from '../components/Tabs';

export default function UserProfile(props) {
    const {username} = props
    return (
    <div>
        <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-vcentered">
                <div className="column is-5">
                    <figure className="image is-4by3">
                        <img src="{}" alt="Profile"></img>
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
                    <h1 className="title is-2">
                        Welcome {props.username}
                    </h1>
                    <h2 className="subtitle is-4">
                        Lorem ipsum 
                    </h2>
                    <p className="has-text-centered">
                        <a className="button is-warning is-rounded">
                            Edit Profile
                        </a>
                        <a className="button is-warning is-rounded">
                            Log out
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Tabs>
        <div label="Wines added">
        Wines added
        </div>
        <div label="Your cellar">
        Your cellar
        </div>
        <div label="Wines reviewed">
        Wines reviewed
        </div>
      </Tabs>
</div>
    )
}
