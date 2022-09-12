/*===================
  home.test.tsx
 ===================*/
import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import Home from '../home';
import i18n from '../../../i18n/i18n';

beforeEach(async () => {
    await i18n.init();
});

afterEach(cleanup);

jest.mock('../../../api/api', () => ({
    __esModule: true,
    default: jest.fn().mockResolvedValue([]),
}));

describe('Home', () => {
    it('should render the no posts indicator', async () => {
        const { findByTestId } = render(<Home />);

        await waitFor(async () => {
            const element = await findByTestId('empty');
            expect(element).toBeTruthy();
        });
    });
});
