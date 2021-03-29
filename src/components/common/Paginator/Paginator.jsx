import { useState } from 'react';
import cn from 'classnames';
import cls from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={ cls.pagination }>
            {
                portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }

            {
                pages
                    .filter(page => page >= leftPortionPageNumber && page <=rightPortionPageNumber)
                    .map((page) => {
                        return (
                            <span
                                className={ cn({ [cls.active]: currentPage === page }, cls.pagination__link) }
                                key={ page }
                                onClick={(e) => { onPageChanged(page); }}
                            >{ page }</span>
                        )
                    })
            }

            {
                portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }


            {/*<ul className={ cls.pagination__list }>*/}
            {/*    {*/}
            {/*        pages.map((page, i) => {*/}
            {/*            return (*/}
            {/*                <li className={ cls.pagination__item } key={ i.toString() }>*/}
            {/*                    <span*/}
            {/*                        className={*/}
            {/*                            props.currentPage === page*/}
            {/*                                ? `${cls.pagination__link} ${cls.active}`*/}
            {/*                                : `${cls.pagination__link}`*/}
            {/*                        }*/}
            {/*                        onClick={ (e) => props.onPageChanged(page) }*/}
            {/*                    >{ page }</span>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ul>*/}
        </div>
    );
};

export default Paginator;