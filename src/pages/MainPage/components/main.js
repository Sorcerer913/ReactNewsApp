import React, {useEffect, useLayoutEffect, useReducer, useState} from "react";
import PostList from "./PostList";
import {MultiPostFetcher} from "../helpers/PostsFetcher";
import {PaginationView} from "../../../components/Pagination";
import {useHistory, useParams} from "react-router-dom";

import {GET_POSTS, GOT_POSTS} from "../store/actions/actionTypes";
import {store} from "../../../store/store";

export const MainPage = () => {
    let {pageNum} = useParams()
    console.debug("Main Page ------------------------")
    console.debug(pageNum)
    const defaultPostPageCount = 1
    const postsPerPage = 10
    let pageDataInit





    if(pageNum !== undefined){
        pageDataInit = {
            pageCount: defaultPostPageCount,
            currentPage: parseInt(pageNum)
        }
    }else {
        pageDataInit = {
            pageCount: defaultPostPageCount,
            currentPage: 1,
        }
    }

    const [posts, setPosts] = useState(Array.from({length:postsPerPage},()=>({})))
    const [pagesData, setPagesData] = useState(pageDataInit)
    // const [state, setState] = useState(posts, pagesData)

    // postNum >= 1
    // pageNum >= 1
    // const getPageByPost = (postNum) => 1+Math.floor((postNum-1)/2)

    useLayoutEffect(() => {
        console.debug("useEffect: MainPage")
        // if(pageNum !== pagesData.currentPage){
        //     setPagesData({
        //         pageCount: defaultPostPageCount,
        //         currentPage: parseInt(pageNum)
        //     })
        // }

        const getPostStartByPage = (pageNum) => (pageNum-1)*postsPerPage
        const afterFetch = (gotPostsSliced, totalCount) => {
            console.debug(`gotPostsSliced:${gotPostsSliced}\ntotalCount:${totalCount}`)
            console.debug(`FirstPost:${gotPostsSliced[0].author}`)
            // setState([
            //     gotPostsSliced,
            //     {
            //         pageCount: totalCount,
            //         currentPage: parseInt(pageNum)
            //     }
            // ])
            setPosts(gotPostsSliced)
            setPagesData({
                pageCount: totalCount,
                currentPage: parseInt(pageNum)
            })
        }
        const viewPostStart = getPostStartByPage(pagesData.currentPage)
        // store.dispatch({type: GET_POSTS})
        MultiPostFetcher(viewPostStart, viewPostStart+postsPerPage, afterFetch)

    }, [pageNum, pagesData.currentPage])

    const history = useHistory()
    const onPageChange = (pageNum) => {
        history.push(`/${pageNum}`)
    }

    return (
        <div>
            <PostList posts={posts}/>
            <PaginationView pagesData={pagesData} onPageChange={onPageChange}/>
        </div>
    )
}