/*===================
  card.test.tsx
 ===================*/

import React from 'react';
import { render } from '@testing-library/react';
import Card from '../card';
import i18n from '../../../i18n/i18n';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

beforeEach(async () => {
    await i18n.init();
});

describe('<Card />', () => {
    it('Card Rendering', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] });

        const card = render(
            <Router history={history}>
                <Card id={0} userId={0} title={''} body={''} />
            </Router>,
        );
        expect(card).toBeTruthy();
    });
});
