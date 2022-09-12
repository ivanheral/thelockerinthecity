/*===================
  head.test.tsx
 ===================*/
import React from 'react';
import { render } from '@testing-library/react';
import Head from '../head';
import i18n from '../../../i18n/i18n';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

beforeEach(async () => {
    await i18n.init();
});

describe('<Head />', () => {
    it('Head Rendering', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] });

        render(
            <Router history={history}>
                <Head>
                    <p>test</p>
                </Head>
            </Router>,
        );
    });
});
