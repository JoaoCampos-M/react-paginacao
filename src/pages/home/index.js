import React, { useEffect, useState } from 'react'
import './style.css'
function Home() {
  const data = Array.from({ length: 100 }).map((_, index) => {
    return `Item ${index + 1}`
  })

  /** =========================================================== */
  const perPage = 5
  // const state = {
  //   page: 1,
  //   perPage,
  //   totalPage: Math.ceil(data.length / perPage)
  // }
  const [page, setPage] = useState(1)

  const [atualPage, setAtualPage] = useState([])

  const totalPage = Math.ceil(data.length / perPage)
  function List() {
    return (
      <div>
        {atualPage.map((e, i) => {
          return (
            <div key={i} className="item">
              {e}
            </div>
          )
        })}
      </div>
    )
  }

  function next() {
    const lastPage = !(page < totalPage)
    if (!lastPage) {
      setPage(page + 1)
    }
  }
  function prev() {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  function goTo(pg) {
    if (pg < 1) {
      pg = 1
    }

    setPage(pg)
    if (pg > totalPage) {
      setPage(totalPage)
    }
  }
  function updatePg() {
    const start = (page - 1) * perPage
    const end = start + perPage
    setAtualPage(data.slice(start, end))
    console.log(atualPage)
  }
  useEffect(() => {
    updatePg()
  }, [page])

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
              goTo(totalPage)
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
