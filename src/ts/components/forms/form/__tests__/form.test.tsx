/*===================
  form.test.tsx
 ===================*/
import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Form from '../form';
import i18n from '../../../../i18n/i18n';

beforeEach(async () => {
    await i18n.init();
});

describe('<Form />', () => {
    test('Form Rendering', async () => {
        await act(async () => {
            // eslint-disable-next-line @typescript-eslint/await-thenable
            await render(<Form name={''} fields={[]} />);
        });
    });
});
