import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export default class splash extends Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        return (
            <div className="hero-container">
                <img className="hero-image" src={window.heroURL} alt="" />
                <div className="over-lay"></div>
                <div className="call-to-action">
                    <h1 className="call-to-action-title">Home Cooked Mystery Meals</h1>
                    <p className="tag-line">Home cooked meals inspired by cultures around the world delivered to your door</p>
                    <Link className="action-button" to="/">Order Now</Link>
                </div>
                <section className="below-fold">
                    <div className="info-container">
                        <div className="info-blurb">
                            <h2 className="info-title">Congrats on Finding Me</h2>
                            <h3 className="info-phrase"> Im not
                            like the other blogs, I'm a cool blog.</h3>
                            <p className="info-paragraph">"Here you will find recipes made from scratch, recipes
                            that enhance prepared mixes for easier and faster
                            cooking, tips to help you in the kitchen, and
                            details on my Mystery Meal cooking project! I swear a lot
                            and use a lot of garlic. If either of these offend you
                            please do not go through my blog but feel free to
                            order some food! I'm going to keep this intro short
                            and sweet because I know you probably forgot about
                            dinner and found one of my posts on pinterest. I wish
                            you nothing but good luck my culinary soldier"</p>
                            <Link className="action-button blog" to="/">Blog</Link>
                        </div>
                        
                        <img className="info-pic" src={window.infoURL} alt="MyMy in her kitchen" />
                    </div>
                </section>
                <section className="feature-container">
                   
                    <img className="feature-background-image" src={window.sectionURL} alt="" />
                    <div className="feature-images-container">
                        <div className="feature-card">
                            <img className="feature-image" src={window.f1URL } alt="" />
                            <h3 className="feature-title">Savory</h3>
                            <p className="feature-description">Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Molestiae
                             veniam sequi suscipi.</p>
                            <Link className="action-button blog feature-button" to="/">Recipes</Link>
                        </div>
                        <div className="feature-card">
                            <img className="feature-image" src={window.f2URL }  alt="" />
                            <h3 className="feature-title">Sweet</h3>
                            <p className="feature-description">Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Molestiae
                             veniam sequi suscipi.</p>
                            <Link className="action-button blog feature-button" to="/">Recipes</Link>
                        </div>
                        <div className="feature-card">
                            <img className="feature-image" src={window.f3URL }  alt="" />
                            <h3 className="feature-title">Booze</h3>
                            <p className="feature-description">Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Molestiae
                             veniam sequi suscipi.</p>
                            <Link className="action-button blog feature-button" to="/">Recipes</Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
