import React from 'react'
import './style.css'
function Home() {
  const data = Array.from({ length: 100 }).map((_, index) => {
    return `Item ${index + 1}`
  })

  /** =========================================================== */
  const perPage = 5
  const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)
  }

  function List() {
    /**  
     * Populando a lista com array método 1
    const data = []
    for (let c = 0; c < 100; c++) {
      data.push(`<div className="item" > Item ${index + 1}</div>`)
    }

    */

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

  function prev() {
    state.page++
    const lastPage = state.page > state.totalPage
    if (lastPage) {
      state.page--
    }
    updatePg()
  }
  function next() {
    state.page--
    if (state.page < 1) {
      state.page++
    }
    updatePg()
  }
  function goTo(page) {
    if (page < 1) {
      page = 1
    }

    state.page = page
    if (page > state.totalPage) {
      state.page = state.totalPage
    }
    updatePg()
  }
  function updatePg() {
    console.log(state.page)
  }

  console.log(state.totalPage)

  return (
    <div className="container">
      <header>
        <h1>Paginate</h1>
      </header>

      <div id="paginate">
        <List></List>
        <div className="controls">
          <div
            className="first"
            onClick={() => {
              goTo(1)
            }}
          >
            &#171;
          </div>
          <div
            className="prev"
            onClick={() => {
              prev()
            }}
          >
            prev
          </div>
          <div className="numbers">
            <div>1</div>
          </div>
          <div
            className="next"
            onClick={() => {
              next()
            }}
          >
            next
          </div>
          <div
            className="last"
            onClick={() => {
              goTo(state.totalPage)
            }}
          >
            &#187;
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
