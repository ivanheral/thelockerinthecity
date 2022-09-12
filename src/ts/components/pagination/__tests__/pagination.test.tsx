/*===================
  pagination.test.tsx
 ===================*/
import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '../pagination';
import i18n from '../../../i18n/i18n';

beforeEach(async () => {
    await i18n.init();
});

describe('<Pagination />', () => {
    test('Pagination Rendering', () => {
        render(
            <Pagination
                postsPerPage={0}
                totalPosts={0}
                paginate={function (n: number): void {
                    console.log(n);
                }}
                currentPage={0}
            />,
        );
    });
});
