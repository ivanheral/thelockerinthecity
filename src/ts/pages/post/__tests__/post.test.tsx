/*===================
  post.test.tsx
 ===================*/
import React from 'react';
import { render } from '@testing-library/react';
import Post from '../post';
import i18n from '../../../i18n/i18n';

beforeEach(async () => {
    await i18n.init();
});

const mockUseLocationValue = {
    pathname: '/post',
    search: '',
    hash: '',
    state: {},
};
jest.mock('react-router', () => ({
    useLocation: jest.fn().mockImplementation(() => {
        return mockUseLocationValue;
    }),
}));

describe('<Post />', () => {
    test('Post Rendering', () => {
        render(<Post />);
    });
});
