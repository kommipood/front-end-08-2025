import React from 'react'
import { Link } from 'react-router-dom'


function Work() {
  return (
    <div>
        <Link to="/">
            <button>Tagasi</button>
        </Link>
        {/* <Routes>
          <Route path="/" element={ <Avaleht/> } />
        </Routes> */}
        
        <div>Tööde sisu</div>
    </div>
  )
}

export default Work