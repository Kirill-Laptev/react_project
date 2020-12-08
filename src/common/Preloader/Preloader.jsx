import React from 'react';
import preloader from '../../temp/image/Spinner-1s-200.svg'

const Preloader =  (props) => {
    return(
        <div>
        <img src={preloader} />
        </div>
    )
}

export default Preloader;