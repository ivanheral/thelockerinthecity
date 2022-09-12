/*===================
  input.test.tsx
 ===================*/
import React from 'react';
import { render } from '@testing-library/react';
import Input from '../input';
import i18n from '../../../../i18n/i18n';

beforeEach(async () => {
    await i18n.init();
});

describe('<Input />', () => {
    test('Input Rendering', () => {
        render(
            <Input
                field={{
                    label: '',
                    class: '',
                    control: '',
                    value: undefined,
                    helper: undefined,
                    placeholder: undefined,
                    validators: undefined,
                }}
                theme={{
                    form: '',
                    label: '',
                    control: '',
                    field: '',
                    gutter: '',
                }}
            />,
        );
    });
});
