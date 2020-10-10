import React from 'react';
import Plyr from 'plyr';

import './plyr.css';

class Video extends React.Component {

    loadSource() {
        this.player.source = {
            sources: [{
                provider: 'youtube',
                src: this.props.video.video_url
            }]
        };
    }

    componentDidMount() {
        // const options = {autoplay: true, }; //hehe
        const options = {};
        const video = document.getElementById("player");
        this.player = new Plyr(video, options);
        this.loadSource();
    }

    componentDidUpdate() {
        this.loadSource();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    render() {
        return (
            <div className="playerDiv">
            <video id="player" >
            </video>
            </div>
           

        );
    }
}

export default Video;