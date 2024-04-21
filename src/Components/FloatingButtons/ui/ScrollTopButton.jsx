import '../FloatingButtons.scss'

export const ScrollTopButton = () => {
    return (
        <a
            className="floatButton"
            aria-label="Scroll to top of the page"
            href="#"
        >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="30" fill="black" fillOpacity="0.5"/>
                <path d="M17.1123 37.1123C17.8928 37.8928 19.1579 37.8935 19.9392 37.1139L28.5873 28.4846C29.368 27.7056 30.632 27.7056 31.4127 28.4846L40.0608 37.1139C40.8421 37.8935 42.1072 37.8928 42.8877 37.1123L43.5858 36.4142C44.3668 35.6332 44.3668 34.3668 43.5858 33.5858L31.4142 21.4142C30.6332 20.6332 29.3668 20.6332 28.5858 21.4142L16.4142 33.5858C15.6332 34.3668 15.6332 35.6332 16.4142 36.4142L17.1123 37.1123Z" fill="white"/>
            </svg>
        </a>
    );
};
