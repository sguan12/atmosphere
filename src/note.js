import React from 'react';
import ReactDOM from 'react-dom';
import './note.css';
import App from './App';

function message() {
    return (
        <div>
            <div className="info">
                <p id="title"> about atmosphere </p>
            </div>
            <div className="note">
                <p>Since I wrote a reflection for my last coding project, I figured I’d write one for this one too. The purpose of atmosphere was for me to learn how to use react.js and get some more practice with API requests. When considering what project I could make that would involve those skills, I kind of just went with what idea had the most tutorials and API options. Then, I thought of all the ways I could “spice things up,” and decided to make a weather app that (hopefully) makes people appreciate the weather more by conveying data through haikus.</p>
                <p>At first, I just designed the webpage as I normally would in one huge html document. I had a feeling that doing so basically defeated the purpose of react, but I wanted to first design everything in a familiar manner before rearranging things to work with react a bit better. I didn’t struggle too much on the API requests since I had some experience with those from hackathons, but I definitely have a better understanding of the fetch function now that I implemented it more carefully. The part I was stuck on the most was dealing with react variables, from setting states to accessing props to defining context variables. Those were all completely new concepts to me but I think I figured most of it out by the end of the project thanks to all the youtube resources out there. (I always felt so amazing everytime I got something to work the way I wanted it to haha…) With that being said, I ended up jumping from topic to topic depending on my project’s needs, so I think there may be a lot of gaps in my react knowledge that I eventually need to fill.</p>
                <p>If I had more time, I would have liked to add a lot more details to this program. Originally, I wanted to make the weather cards more interactive and include cloud animations in the background. It also would have been cool if I wrote more haikus or altered the background animations according to the weather type. And besides just the aesthetics, I know that there’s bound to be a lot of inefficiencies in my code since I didn’t exactly learn react in a very comprehensive way…I only discovered context and hooks on the last day of coding! I’m sure I could have used them in other places of my code too, but I just ended up making sure the bare minimum ran the way I envisioned it.</p>
                <p>But, winter break doesn’t last forever, and one week was the max amount of time I was willing to spend on this. (After all, I still have more projects I want to try!) Overall, I’m just proud of how much I was able to get done with what time I had, and I think this project was definitely a worthwhile endeavor :)</p>
            </div>
            <button id="notebutton" onClick={back}>go back</button>
        </div>
    )
}

function Note() {
    ReactDOM.render(message(), document.getElementById('root'));
}

function back() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

export default Note;