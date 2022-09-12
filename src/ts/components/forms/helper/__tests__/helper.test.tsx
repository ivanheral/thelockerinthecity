/*===================
  helper.test.tsx
 ===================*/
import React from 'react';
import { render } from '@testing-library/react';
import Helper from '../helper';
import i18n from '../../../../i18n/i18n';

beforeEach(async () => {
    await i18n.init();
});

describe('<Helper />', () => {
    test('Helper Rendering', () => {
        render(<Helper helper={''} />);
    });
});
