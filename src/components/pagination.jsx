import React from 'react'

const pagination = ({
    currentPage,
    setCurrentPage,
    postPerPage,
    totalPost
}) => {
    let pages = []
    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        pages.push(i)
    }
    return (
        <div>
            {pages.map((page, index)=>{
                return (
                    <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
                )
            })}
        </div>
    )
}

export default pagination
