import React from "react";
import "./Project.css";

const Project = ({title,img,desc,desc_large,url}) => {
  return (
    <div class="mb-3 ">
        <a class="card" href={url}>
          <img
            data-scroll
            src={img}
            class="card-img-top "
            alt="imagen"
          />
        </a>
        <div class="card-body">
          <h5 class="card-title proyect_title">{title}</h5>
          <p class="card-text proyect_description">{desc}</p>
          <a class="proyect_link" href={url}>
            {url}
          </a>
        </div>
      </div>
  );
}

export default Project;


