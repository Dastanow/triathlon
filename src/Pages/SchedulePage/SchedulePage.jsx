import { Helmet } from 'react-helmet';
import './SchedulePage.scss';

export const SchedulePage = () => {
    return (
        <div id="schedule">
            <Helmet>
                <title>Schedule</title>
                
            </Helmet>
            {/* <!-- Start 1C Fitness BLOCK Code Insert in place for schedule. --> */}
            <div data-fit1c-calendar></div>
            {/* <!-- End 1C Fitness BLOCK Code --> */}
        </div>
    )
}