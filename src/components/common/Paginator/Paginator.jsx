import cls from './Paginator.module.css';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pagesCount2 = 0;

    pagesCount > 10 ? pagesCount2 = 10 : pagesCount2 = pagesCount;

    let pages = [];

    // for (let i = 1; i <= pagesCount; i++) {
    for (let i = 1; i <= pagesCount2; i++) {
        pages.push(i);
    }

    return (
        <div className={ cls.pagination }>
            <ul className={ cls.pagination__list }>
                {
                    pages.map((page, i) => {
                        return (
                            <li className={ cls.pagination__item } key={ i.toString() }>
                                <span
                                    className={
                                        props.currentPage === page
                                            ? `${cls.pagination__link} ${cls.active}`
                                            : `${cls.pagination__link}`
                                    }
                                    onClick={ (e) => props.onPageChanged(page) }
                                >{ page }</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Paginator;