import React from 'react';

interface iPagination {
    postsPerPage: number;
    totalPosts: number;
    paginate: (n: number) => void;
    currentPage: number;
}

const Pagination = (props: iPagination): JSX.Element => {
    const { totalPosts, postsPerPage, currentPage, paginate } = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="py-2">
            <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
                    <li>
                        {pageNumbers.map((number) => (
                            <a
                                key={number}
                                onClick={() => {
                                    paginate(number);
                                }}
                                href="#"
                                className={
                                    currentPage === number
                                        ? 'bg-lockerinthecity text-white relative inline-flex items-center px-4 py-1 sm:px-4 sm:py-2 border text-sm font-medium'
                                        : 'bg-white text-gray-500 hover:bg-lockerinthecity hover:text-white relative inline-flex items-center px-4 py-1 sm:px-4 sm:py-2 border text-sm font-medium'
                                }
                            >
                                {number}
                            </a>
                        ))}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
