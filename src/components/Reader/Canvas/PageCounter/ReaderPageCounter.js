import styled from "styled-components";
import s from './PageReader.module.css'
const PageCounter = styled.div`
  color: black;
  background: white;
  font-size: 40px;
  border: 2px solid black;
  position: fixed;
  bottom: 50px;
  left: 50px;
`

export const ReaderPageCounter = ({currentPage, countOfPages, setPage}) => {

    return (
        <PageCounter>
            <select className={s.select} onChange={e => {
                const pageNumber = e.target.selectedIndex + 1
                setPage(pageNumber)
            }}
            >
                {Array.apply(null, new Array(countOfPages)).map((x, i) => <option selected={currentPage === i + 1} value={i + 1} >{i + 1}</option>)}
            </select> / {countOfPages}

        </PageCounter>
    )
}