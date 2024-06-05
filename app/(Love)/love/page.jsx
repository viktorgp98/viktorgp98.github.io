"use client";
import styles from "./page.module.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Love() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.mainContainer}>
      <Slider {...settings}>
        <div>
          <div className={styles.center}>
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/mochi-mochi-hello-grey-cat-mochi-mochi.gif?alt=media&token=547e4add-5dc5-46e7-a0bc-4fd6a73b9c1b"></img>
            <h2>Holaaa ^^</h2>
          </div>
        </div>
        <div>
          <div className={styles.center}>
            <img
              height={286}
              src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2Fpeachcat.gif?alt=media&token=51c786bd-f8f2-4701-8840-65e43d5574a5"
            />
            <h2>Cómo estamos??</h2>
          </div>
        </div>
        <div>
          <div className={styles.center}>
            <h2>
              Quería decirte lo feliz que me siento
              <br /> de cumplir otro mes más junto a ti 💕 <br />
              (428 dias para ser mas exactos ☝️🤓)
            </h2>
          </div>
        </div>
        <div>
          <div className={styles.gridwrapper}>
            <h3 className={styles.titleCollage}>
              Darte las gracias por <br />
              tantos recuerdos 🥰.
            </h3>
            <div>
              <img
                className={styles.big}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG-1.jpg?alt=media&token=9189d3ab-5b39-4b81-8481-196a6e351c36"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.tall}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG-2.jpg?alt=media&token=71c11f67-19bc-4d02-9324-35b5665b9a95"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.wide}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG-3.jpg?alt=media&token=5ad2895d-ed3c-4a35-af37-467b1eedd98a"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.wide}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG-6.jpg?alt=media&token=78f1c182-de44-43f3-83b2-cae19d437eaf"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.wide}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG-7.jpg?alt=media&token=50cea350-e447-4750-8431-09f38a19f991"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.wide}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG-8.jpg?alt=media&token=9d324237-04fc-4cf2-9e89-2a0de35fa89f"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.wide}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG-9.jpg?alt=media&token=30f18c93-8a68-4665-9d62-bfd74a23f807"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.wide}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG_10.jpg?alt=media&token=1304fe4f-0e65-4e76-b678-6169ba45dd45"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.wide}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG_4.jpg?alt=media&token=cb997821-9958-47e2-96b9-c68abce8a9b3"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.tall}
                src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2FIMG_5.jpg?alt=media&token=bdf739d3-cf79-450f-9ea7-48d1d51311fd"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.center}>
            <img
              height={286}
              src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2Fmochi-mochi-hello-grey-cat-mochi-mochi.gif?alt=media&token=83abc0e7-cdcf-4209-a296-914b1687344f"
            />
            <h2>
              Gracias por entregarme tanto amor. &nbsp; Por comprenderme y<br />
              amarme tal cual soy (se que a veces es díficil 🤭).
            </h2>
          </div>
        </div>
        <div>
          <div className={styles.center}>
            <h2>
              Sé que ha sido un largo recorrido hasta aquí <br /> y te amo por
              seguir compartiendo tu vida junto a mí 🥺. <br />
              Espero de todo corazón seguir así
              <br /> por muchísimo tiempo más🥰
            </h2>
          </div>
        </div>
        <div>
          <div className={styles.center}>
            <img
              height={286}
              src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2Fmochi-mochi-peach-cat-cute.gif?alt=media&token=d65e689f-ece2-4580-82a6-13c49257eb4a"
            />
            <h2>
              Gracias por todo mi amor, mi compañera, <br />
              mi amiga, mi confidente (y asi un sinfin más de sinónimos más) ...{" "}
              <br /> En resumen, mi persona favorita. Mi vida y mi todo 💕
            </h2>
          </div>
        </div>
        <div>
          <div className={styles.center}>
            <img
              height={300}
              src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2Fpeachcat-cuddle.gif?alt=media&token=c8ad4bf3-e29e-4c0e-afad-c34d263a142d"
            />
            <h2>Te amo ❤️</h2>
          </div>
        </div>
        <div>
          <div className={styles.center}>
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolioviktorgonzalez.appspot.com/o/love%2Fpeachcat-kiss.gif?alt=media&token=0137cce6-47f9-4dfd-aa92-ab874baa9a58" />
            <h2>
              Pd: El Viktor del futuro debería haberte
              <br /> entregado un chocolate o unas gomitas 🤭 <br />
              (en el mejor de los casos las dos 😁) Ti amu c:
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}
