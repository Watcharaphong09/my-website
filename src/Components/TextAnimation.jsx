import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const TextAnimation = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    'Nine',
                    2000,
                    'Watcharaphong Malang',
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
            />
        </div>
    );
};

export default TextAnimation;