import React, {useState, useEffect} from 'react'
import Navbar from './navigation/Navbar'
import Login from './screens/Login'

function App() {
    const [connected, setConnected] = useState(false);
    console.log(connected);
    return (
        <div className="col-12">
            <div className="row">
                {connected ?
                <Navbar />
                :
                <Login setConnected={setConnected} />
                }
            </div>
        </div>
    );
}
export default App;