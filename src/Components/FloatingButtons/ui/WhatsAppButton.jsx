import '../FloatingButtons.scss'
export const WhatsAppButton = () => {
    return (
        <a
            className="floatButton"
            aria-label="Chat on WhatsdApp"
            href="https://api.whatsapp.com/send/?phone=996227000180&type=phone_number"
            target="_blank"
        >
            <svg
                className="floatIcon"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="35.5" cy="34.5" r="27.5" fill="#1CC600" />
                <circle cx="35.5" cy="34.5" r="27.5" fill="#1CC600" />
                <path
                    d="M17.5 52.5L20.0132 43.1712C17.9864 39.5371 17.3425 35.2964 18.1996 31.2274C19.0567 27.1583 21.3573 23.5338 24.6793 21.0189C28.0014 18.5041 32.122 17.2675 36.285 17.5361C40.448 17.8048 44.3742 19.5607 47.343 22.4816C50.312 25.4024 52.1244 29.2924 52.4478 33.4377C52.7712 37.5829 51.5839 41.7054 49.1038 45.0486C46.6236 48.3917 43.0169 50.7314 38.9457 51.6382C34.8744 52.5451 30.6115 51.9582 26.9394 49.9854L17.5 52.5ZM27.3945 46.4944L27.9783 46.8395C30.6381 48.4108 33.7447 49.0611 36.8141 48.6889C39.8834 48.3167 42.743 46.9431 44.9473 44.7821C47.1515 42.621 48.5766 39.794 49.0004 36.7415C49.4242 33.6889 48.8229 30.5824 47.2903 27.906C45.7577 25.2296 43.3798 23.1336 40.5272 21.9447C37.6746 20.7559 34.5076 20.5409 31.5195 21.3333C28.5315 22.1256 25.8905 23.8809 24.0079 26.3255C22.1253 28.77 21.1069 31.7665 21.1115 34.8481C21.109 37.4033 21.818 39.9091 23.1596 42.0864L23.5258 42.688L22.1208 47.8948L27.3945 46.4944Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41.8733 37.5959C41.5062 37.3121 41.0762 37.1124 40.6163 37.0119C40.1564 36.9114 39.6787 36.9128 39.2194 37.0161C38.5294 37.2907 38.0835 38.3283 37.6377 38.8472C37.5437 38.9715 37.4055 39.0588 37.2491 39.0925C37.0927 39.1262 36.929 39.1041 36.7884 39.0302C34.2622 38.0822 32.1447 36.3434 30.7799 34.0965C30.6634 33.9563 30.6083 33.7782 30.6262 33.5999C30.6441 33.4215 30.7334 33.2567 30.8754 33.1402C31.3727 32.6685 31.7378 32.0842 31.937 31.4414C31.9812 30.7324 31.8117 30.0261 31.4487 29.4068C31.168 28.5386 30.6339 27.7656 29.9094 27.179C29.5358 27.018 29.1214 26.964 28.7164 27.0236C28.3115 27.0831 27.9331 27.2536 27.627 27.5147C27.0956 27.954 26.6739 28.5019 26.3928 29.1181C26.1117 29.7344 25.9785 30.4031 26.0028 31.0751C26.0044 31.4526 26.0544 31.8284 26.1514 32.1942C26.3979 33.073 26.777 33.9126 27.2767 34.6865C27.6372 35.2793 28.0305 35.8532 28.455 36.4057C29.8346 38.2205 31.5687 39.7614 33.5612 40.9427C34.5611 41.5431 35.6296 42.0312 36.7459 42.3975C37.9055 42.9011 39.1858 43.0945 40.4508 42.9569C41.1716 42.8524 41.8545 42.5797 42.4394 42.1628C43.0244 41.746 43.4935 41.1977 43.8054 40.5663C43.9886 40.185 44.0443 39.7585 43.9646 39.3456C43.7736 38.5013 42.5952 38.0028 41.8733 37.5959Z"
                    fill="white"
                />
            </svg>
            <div className="floatPulse" />
        </a>
    );
};
