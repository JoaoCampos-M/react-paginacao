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
  const maxVisibleButtons = 5
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
    pg = parseInt(pg)
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
    updateButtons()
  }, [page])

  // const [maxR, setMaxR] = useState(1)
  // const [maxL, setMaxL] = useState(1)
  function calculatemaxVisible() {
    let maxL = page - Math.floor(maxVisibleButtons / 2)
    let maxR = page + Math.floor(maxVisibleButtons / 2)
    if (maxL < 1) {
      maxL = 1
      maxR = maxVisibleButtons
    }

    if (maxR > totalPage) {
      maxL = totalPage - (maxVisibleButtons - 1)
      maxR = totalPage
      if (maxL < 1) {
        maxL = 1
      }
    }
    return { maxL, maxR }
  }
  const [paginateButtons, setPaginateButtons] = useState([])

  function PaginationNumbers() {
    return (
      <div className="numbers">
        {paginateButtons.map((item, index) => {
          return (
            <div
              onClick={() => {
                goTo(item)
              }}
              key={index}
              className={item === page ? 'page-active' : ''}
            >
              {item}
            </div>
          )
        })}
      </div>
    )
  }
  function updateButtons() {
    const { maxL, maxR } = calculatemaxVisible()
    console.log(maxL)
    console.log(maxR)
    const aux = []
    for (let c = maxL; c <= maxR; c++) {
      aux.push(c)
    }
    setPaginateButtons(aux)
  }
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
          {/* <div className="numbers">
            <div>1</div>
          </div> */}
          <PaginationNumbers></PaginationNumbers>
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
