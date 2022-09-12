import React from 'react';
import { useTranslation } from 'react-i18next';

interface iHelper {
    helper: string;
}

const Helper = (props: iHelper): JSX.Element => {
    const { helper } = props;
    // i18n
    const { t } = useTranslation();
    return <>{helper ? <p className="text-gray-500 text-xs">{t(`helper.${helper}`)}</p> : null}</>;
};

export default Helper;
