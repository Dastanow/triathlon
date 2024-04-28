import { Helmet } from 'react-helmet';
import './AdminPage.scss';

export const AdminPage = () => {
    return (
        <div id="admin">
            <Helmet>
                <title>PersonalPage</title>
                <script src="https://reservi.ru/widget-fit1c.v2/js/config.js" data-fit-salon-id="b1297733-0bf6-48da-bda8-4beb936b6ec5" defer></script>
            </Helmet>
            <div data-get-fit-index-lk />
        </div>
    )
}