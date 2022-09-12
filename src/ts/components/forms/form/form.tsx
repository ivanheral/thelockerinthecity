import React, { useEffect } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import themes from '../../../config/theme';
import { FieldTemplate, FormTemplate } from '../../../interfaces/field';
import { ThemeTemplate } from '../../../interfaces/theme';
import Input from '../input/input';
import Helper from '../helper/helper';
import Validator from '../validator/validator';

const Form = (props: FormTemplate): JSX.Element => {
    // i18n
    const { t } = useTranslation();
    const { fields, theme = 'default', handle, submit, children, defaultValues } = props;

    const {
        register,
        handleSubmit,
        formState,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: defaultValues ? defaultValues : undefined,
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        submit && submit(data);
    };

    const getClass = (f: FieldTemplate): string => {
        const className = f.class ? (themeForm.control ? `${f.class} ${themeForm.control}` : f.class) : 'w-full';
        return themeForm?.gutter ? `${className} ${themeForm?.gutter}` : className;
    };

    useEffect(() => {
        handle && handle(formState);
    }, [formState.isValid]);

    useEffect(() => {
        reset({ ...defaultValues });
    }, [defaultValues]);

    const themeForm: ThemeTemplate = themes[theme];

    return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form className={themeForm.form} onSubmit={handleSubmit(onSubmit)}>
            {fields.map((f, index) => (
                <div className={getClass(f)} key={index}>
                    <label className={themeForm.label}>{t(`label.${f.label}`)}</label>
                    <Input register={register} theme={themeForm} field={f} />

                    <Validator
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        errors={errors[f.control]}
                    />
                    {f.helper && !errors[f.control] ? <Helper helper={f.helper} /> : null}
                </div>
            ))}
            <div className={themeForm.gutter + ' ' + 'w-full'}>{children}</div>
        </form>
    );
};

export default Form;
