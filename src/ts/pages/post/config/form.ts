export default {
    name: 'post',
    defaultValues: {
        userId: '',
        title: '',
        body: '',
    },
    fields: [
        {
            label: 'userId',
            control: 'userId',
            class: 'w-full',
            placeholder: 'userId',
            validators: {
                required: 'validator.required',
            },
        },
        {
            label: 'title',
            control: 'title',
            class: 'w-full',
            placeholder: 'title',
            validators: {
                required: 'validator.required',
            },
        },
        {
            label: 'body',
            control: 'body',
            class: 'w-full',
            placeholder: 'body',
            validators: {
                required: 'validator.required',
            },
        },
    ],
};
