import React, {useState, useContext, useEffect } from 'react'
import { MusicContext } from '../Context';
import axios from 'axios';


const Artist = () => {

    const context_access_token = useContext(MusicContext);

    const [musicList, setMusicList] = useState([]);

    const getAudioFeatures_Track = async (access_token) => {
        //request token using getAuth() function

        const api_url = `https://api.spotify.com/v1/recommendations?seed_artists=0bAsR2unSRpn6BQPEnNlZm&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`;
        
        try {
            const response = await axios.get(api_url, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });

            setMusicList(response.data.tracks);
            console.log(response.data.tracks);
            console.log(musicList);
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAudioFeatures_Track(context_access_token);
    }, []);

    return (
        <div>
            {musicList.map((music) => {
                <div>Hi</div>
            })}

        </div>
    )
}

export default Artist
