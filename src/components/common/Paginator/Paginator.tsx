import {FC, useEffect, useState} from 'react'
import s from './Paginator.module.css'

type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number

}
export const Paginator: FC<PropsType> =
    ({
         pageSize,
         totalUsersCount,
         currentPage,
         onPageChanged,
         portionSize = 10
     }) => {
        const pagesCount = Math.ceil(totalUsersCount / pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) pages.push(i)

        //1 variant
        const portionCount = Math.ceil(pagesCount / portionSize)
        const [portionNumber, setPortionNumber] = useState(1)
        const leftPortionNumber = (portionNumber - 1) * portionSize + 1
        const rightPortionNumber = portionNumber * portionSize

        useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);

        // 2 variant
        // let slicedPages
        //
        // if (currentPage - 3 < 0) {
        //     slicedPages = pages.slice(0, 5)
        // } else {
        //     slicedPages = pages.slice(currentPage - 3, currentPage + 2)
        // }
        //
        // const pagesMap = slicedPages.map(page => {
        //     const onClick = () => onPageChanged(page)
        //
        //     const currentPageClasses = page === currentPage ? s.selectedPage : undefined
        //
        //     return (
        //         <span key={page} className={currentPageClasses} onClick={onClick}>
        //        -{page}-
        //     </span>
        //     )
        // })

        return (
            <div>
                {portionNumber > 1 && <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}
                {pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p => {
                        const pageClassName = p === currentPage ? `${s.page} ${s.activePage}` : s.page;
                        return <span className={pageClassName} key={p} onClick={(e) => onPageChanged(p)}>{p}</span>
                    })
                }
                {portionCount > portionNumber && <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}

                {/*{pagesMap}*/}
            </div>
        )
    }