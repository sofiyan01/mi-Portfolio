// components/ImageKitWrapper.jsx
import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/me99izv07/"; // from ImageKit dashboard

const ImageKitWrapper = ({ path, alt, width, height }) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      alt={alt}
      transformation={[{ width, height }]}
      loading="lazy"
      lqip={{ active: true }} // blur placeholder
      className="rounded-lg shadow-md"
    />
  );
};

export default ImageKitWrapper;
