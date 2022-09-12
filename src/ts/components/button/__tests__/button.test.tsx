/*===================
  button.test.tsx
 ===================*/
import React from 'react';
import { render } from '@testing-library/react';
import Button from '../button';
import i18n from '../../../i18n/i18n';

beforeEach(async () => {
    await i18n.init();
});

describe('<Button />', () => {
    test('Button Rendering', () => {
        const button = render(<Button />);
        expect(button).toBeTruthy();
    });
});
