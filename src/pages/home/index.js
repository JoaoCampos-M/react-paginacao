import React from 'react'
import './style.css'
function Home() {
  function List() {
    /**  
     * Populando a lista com array método 1
    const data = []
    for (let c = 0; c < 100; c++) {
      data.push(`<div className="item" > Item ${index + 1}</div>`)
    }

    */

    const data = Array.from({ length: 100 }).map((_, index) => {
      return `Item ${index + 1}`
    })
    return (
      <div>
        {data.map((e, i) => {
          return (
            <div key={i} className="item">
              {e}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container">
      <header>
        <h1>Paginate</h1>
      </header>

      <div id="paginate">
        <List></List>
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
