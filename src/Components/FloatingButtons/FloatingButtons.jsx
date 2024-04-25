import { ScrollTopButton } from './ui/ScrollTopButton';
import { WhatsAppButton } from './ui/WhatsAppButton';
import './FloatingButtons.scss';

export const FloatingButtons = () => {
    return (
        <nav className="floatingButton">
            <ScrollTopButton />
            <WhatsAppButton />
        </nav>
    );
};
