import { ThemesButtonTemplate } from '../interfaces/theme';

const ThemesButton: ThemesButtonTemplate = {
    default: {
        style: 'bg-lockerinthecity truncate uppercase w-52 border-teal text-white py-2 px-2 rounded',
        state: 'disabled:bg-secondary',
    },
};

export default ThemesButton;
