/*===================
  validator.test.tsx
 ===================*/
import React from 'react';
import { render } from '@testing-library/react';
import Validator from '../validator';
import i18n from '../../../../i18n/i18n';

beforeEach(async () => {
    await i18n.init();
});

describe('<Validator />', () => {
    test('Validator Rendering', () => {
        render(
            <Validator
                errors={{
                    message: '',
                }}
            />,
        );
    });
});
