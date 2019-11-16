import React,{ Component } from 'react';
import Songlist from './SongList';
import SongDetail from './SongDetail';

class App extends Component {
    render() {
        return(
            <div className="ui container grid" style={{marginTop:'30px'}}>
                <div className="ui row">
                    <div className="column eight wide">
                        <Songlist />
                    </div>
                    <div className="column eight wide">
                        <SongDetail />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;