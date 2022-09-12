import React from 'react';
import { iPost } from '../../interfaces/post';
import Button from '../button/button';
import { useHistory } from 'react-router-dom';

const Card = (props: iPost): JSX.Element => {
    // Obtenemos las properties
    const { body } = props;

    const history = useHistory();

    const showPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        history.push('/post', props);
    };

    const limitString = (word: string) => `${word.substring(0, 20)}...`;

    return (
        <div className="flex flex-col w-full">
            <div className="block p-6 rounded-lg shadow-lg bg-white">
                <p className="text-gray-700 text-base mb-4">{limitString(body)}</p>
                <Button
                    text="show_post"
                    onclick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => showPost(e)}
                />
            </div>
        </div>
    );
};

export default Card;
