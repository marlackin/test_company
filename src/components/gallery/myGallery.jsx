import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { getImages } from "../../api/images.api";
import './myGallery.css'

const Gallery = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth, handleLogOut, userName, setUserName } =
    useContext(AuthContext);
  const [imagesInfo, setImagesInfo] = useState([]);

  const getGalleryImages = () => {
    getImages()
      .then((res) => {
        console.info(res.data);
        setImagesInfo(res.data);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    getGalleryImages();
  }, []);

  return (
    <main>
      <section>
        Lorem fdgfdgdd
        <button></button>
      </section>
      <section>
        All images
        <div className="wrapper">
          {imagesInfo.map((im, ind) => (
            <img src={im.download_url} key={ind} alt={im.author} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
