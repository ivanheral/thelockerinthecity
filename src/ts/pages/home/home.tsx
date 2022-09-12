import React, { useEffect, useState } from 'react';
import fetchLocker from '../../api/api';
import { iPost } from '../../interfaces/post';
import Card from '../../components/card/card';
import Pagination from '../../components/pagination/pagination';
import Search from '../../components/search/search';

const Home = (): JSX.Element => {
    const [data, setData] = useState<iPost[]>([]);
    const [dataFilter, setDataFilter] = useState<iPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState<number>(20);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts: iPost[] = dataFilter.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const fetchData = () => {
        fetchLocker('posts')
            .then((posts: iPost[]) => {
                setData(posts);
                setDataFilter(posts);
            })
            .catch(() => {
                /** */
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (e: string) => {
        setDataFilter(
            data.filter((post) => {
                return e === '' || e === post.userId.toString();
            }),
        );
    };

    const showData = () => {
        if (error) {
            return (
                <div data-testid="error" className="grid place-items-center h-screen">
                    <div>ERROR</div>
                </div>
            );
        }

        if (loading) {
            return (
                <div data-testid="empty" className="grid place-items-center h-screen">
                    <svg
                        aria-hidden="true"
                        className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-lockerinthecity"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                </div>
            );
        }

        if (dataFilter?.length === 0) {
            return (
                <div data-testid="empty" className="grid place-items-center h-screen">
                    <div>NO HAY DATOS</div>
                </div>
            );
        }

        return (
            <div data-testid="posts">
                <div className="m-4" data-testid="posts">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md gap-4">
                        {currentPosts.map((post: iPost) => (
                            <Card key={post.id} {...post}></Card>
                        ))}
                    </div>
                </div>
                {dataFilter.length > postsPerPage ? (
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={dataFilter.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                ) : null}
            </div>
        );
    };

    return (
        <>
            <div className="m-4">
                <Search handle={handleSearch} />
            </div>
            {showData()}
        </>
    );
};

export default Home;
