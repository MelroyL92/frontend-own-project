import {useState} from "react";

const Image = ({src, alt, placeholderSrc = 'https://via.placeholder.com/600x400',...props})=> {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);


    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
    };


    return (
        <img
            src={handleImageError ? placeholderSrc : (imageLoaded ? src : placeholderSrc)}
            alt={alt}
            {...props}
            onLoad={handleImageLoad}
        />
    );
};

export default Image;