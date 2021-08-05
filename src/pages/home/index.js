import React from 'react'
import './style.css'
function Home() {
  return (
    <div className="container">
      <header>
        <h1>Paginate</h1>
      </header>

      <div id="paginate">
        <div className="list">
          <div className="item"> item 1</div>
          <div className="item"> item 2</div>
          <div className="item"> item 3</div>
        </div>
        <div className="controls">
          <div className="first">&#171;</div>
          <div className="prev"></div>
          <div className="numbers">
            <div>1</div>
          </div>
          <div className="next"></div>
          <div className="last">&#187;</div>
        </div>
      </div>
    </div>
  )
}
export default Home
