import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div id="error-page" className='text-center itmes'>
                <img  src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b.png" alt="" />
                <h1>Oops!</h1>
                <p>Sorry, You Hit Wrong Url.</p>
                <p>
                    <i>{error.statusTex || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;