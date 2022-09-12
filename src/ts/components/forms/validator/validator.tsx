import React from 'react';
import { useTranslation } from 'react-i18next';

interface iValidator {
    errors: {
        message: string;
    };
}

const Validator = (props: iValidator): JSX.Element => {
    const { errors } = props;
    // i18n
    const { t } = useTranslation();
    return <>{errors ? <p className="text-red-500 text-xs italic">{t(errors.message)}</p> : null}</>;
};

export default Validator;
