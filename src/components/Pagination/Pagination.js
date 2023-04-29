import React, {useEffect, useState} from "react";
import Pagination from 'react-bootstrap/Pagination';
import {Link, useHistory} from "react-router-dom";

export const PaginationView = ({pagesData, onPageChange}) => {
    console.debug(pagesData)
    console.debug('Pagination update')

    const maxPageCount  = 5
    const viewPageCount = pagesData.pageCount > maxPageCount ? maxPageCount : pagesData.pageCount

    const pageNumList = Array.from({length:viewPageCount},(v,k)=>k+1)

    const previous = () => changePageState(pagesData.currentPage - 1)
    const special = (pageNum) => changePageState(pageNum)
    const next = () => changePageState(pagesData.currentPage + 1)
    const changePageState = (pageNum) => {
        if(pageNum === 0 || pageNum === pagesData.pageCount) return
        // const onPageChange = (pageNum) => history.push(`/${pageNum}`)
        onPageChange(pageNum)

    }

    return (
        <Pagination className="justify-content-center">
            <ul className="pagination">
                {pagesData.currentPage === 1 ?
                    <li className='page-item disabled tabindex="-1"'>
                        <span className="page-link unselectable">Previous</span>
                    </li> : <li className='page-item enabled' onClick={previous}>
                        <Link className="page-link">Previous</Link>
                    </li>}
                {pageNumList.map((pageNum) => {

                    if(pageNum === pagesData.currentPage){
                        return <li className={"page-item active"}>
                            <span className="page-link unselectable">{pageNum}
                                {/*<span className="sr-only">(current)</span>*/}
                            </span>
                        </li>
                    }

                    return (
                        <li className="page-item enabled" onClick={() => special(pageNum)}>
                            <Link className="page-link ">{pageNum}</Link>
                        </li>
                    )
                })}
                {pagesData.currentPage === pagesData.pageCount ?
                    <li className='page-item disabled tabindex="-1"'>
                        <span className="page-link unselectable">Next</span>
                    </li> :
                    <li className={"page-item enabled"} onClick={next}>
                        <Link className="page-link">Next</Link>
                    </li>}
            </ul>
        </Pagination>
    )
}