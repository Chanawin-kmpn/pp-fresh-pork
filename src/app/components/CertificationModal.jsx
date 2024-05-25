import React, { useEffect, useState } from "react";

const CertificationModal = () => {
  const [isOpenModal, setIsopenModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const certificates = [
    {
      src: "/assets/images/certificates/ghp-certificate.jpg",
      alt: "GHP Certificate",
    },
    {
      src: "/assets/images/certificates/GMP-certificate.png",
      alt: "GMP Certificate",
    },
    {
      src: "/assets/images/certificates/haccp-certificate.jpg",
      alt: "HACCP Certificate",
    },
    {
      src: "/assets/images/certificates/revenue-department.png",
      alt: "Revenue Department",
    },
  ];

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsopenModal(true);
  };

  const closeModal = () => {
    setIsopenModal(false);
    setModalImage("");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        setIsopenModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <ul className="flex flex-wrap gap-4 lg:gap-8">
        {certificates.map((image, index) => (
          <li
            key={index}
            className="flex-1 basis-[167.5px] lg:basis-[256px] cursor-pointer"
            onClick={() => openModal(image.src)}
          >
            <img src={image.src} alt={image.alt} />
          </li>
        ))}
      </ul>

      {isOpenModal && (
        <div
          className="modal flex justify-center items-center fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-black1 bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="modal-content relative bg-gray5 w-fit h-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close absolute top-4 right-6 text-white text-nm font-bold cursor-pointer"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-gray5 bg-primary rounded-md "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
            <img src={modalImage} alt="Modal" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationModal;
