import React, { useEffect, useState } from 'react';
import { FieldValues, FormState } from 'react-hook-form';
import { useLocation } from 'react-router';
import Form from '../../components/forms/form/form';
import Button from '../../components/button/button';
import config from './config/form';
import { iPost } from '../../interfaces/post';
import fetchLocker from '../../api/api';

const Post = (): JSX.Element => {
    // Formulario es valido
    const [form, setForm] = useState<FormState<FieldValues> | undefined>(undefined);

    const { state } = useLocation();

    const handleForm = (value: FormState<FieldValues>) => {
        setForm(value);
    };

    const submitHandle = (value: FieldValues) => {
        fetchLocker<FieldValues>('posts', 'PUT', value)
            .then((response) => {
                //console.log(response);
                /** */
            })
            .catch((err) => {
                /** */
                //console.log(err);
            })
            .finally(() => {
                /** */
            });
    };

    useEffect(() => {
        const State: iPost = state as iPost;
        config.defaultValues.userId = State.userId?.toString();
        config.defaultValues.title = State.title;
        config.defaultValues.body = State.body;
    }, [state]);

    return (
        <div className="m-2 max-w-lg m-auto">
            <Form handle={handleForm} submit={submitHandle} {...config}>
                <Button text="modify_post" disabled={!form?.isValid} />
            </Form>
        </div>
    );
};

export default Post;
