import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;

  & > button {
    padding: 5px 8px;
  }
`

const CurrentPage = styled.button`
  background-color: #e34327;
  border: 2px solid gray;
`

const Pagination = ({ currentPage, changeCurrentPage }) => {
  const pages = [...Array(32).keys()];
  const actualPages = pages.filter((item) => {
    if (currentPage <= 9) {
      return item <= 10;
    }
    else if (currentPage <= 19) {
      return item >= 9 && item <= 20;
    } else if (currentPage <= 29) {
      return item >= 19 && item <= 30;
    }
    else {
      return item >= 29;
    }
  })

  const handleChangeCurrentPage = (e) => {
    changeCurrentPage(e.target.dataset.index);
  }
  return (
    <PaginationContainer>
      <button onClick={handleChangeCurrentPage} data-index={1}>Inicio</button>
      {actualPages.map((page) => {
        if (page === currentPage) {
          return <CurrentPage key={page} data-index={page + 1} onClick={handleChangeCurrentPage}>{page + 1}</CurrentPage>
        }
        return <button key={page} data-index={page + 1} onClick={handleChangeCurrentPage}>{page + 1}</button>
      })}
      <button onClick={handleChangeCurrentPage} data-index={32}>Final</button>
    </PaginationContainer>
  )
}

export default Pagination