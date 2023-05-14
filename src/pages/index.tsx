import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";
import getParallaxHOC from "@self/components/parellax";
import { Typography } from "@mui/material";
import style from "@self/styles/home.module.scss";

function Parellex() {
  const target = useRef(null);
  const name = useParallax({
    speed: 20,
    targetElement: target?.current ?? undefined,
  })

  return (<div className={style.container}>
    <div ref={target} className={style.bgImage}>
      <div className={style.bgOverlay}>
        <div ref={name.ref} className={style.introContent}>
          <Typography variant="h4" component="h1">
          Utkarsh Deep
          </Typography>
          <Typography variant="h4" component="h1">
          AWS Certified Solutions Architect
          </Typography>
        </div>
        <div className={style.reference}>
        Photo by <a href="https://unsplash.com/@daria_shevtsova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daria Shevtsova</a> on <a href="https://unsplash.com/photos/zbWFT4eVopE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </div>
    </div>
    <div className={style.introWelcome} >
      <p>
        Hello and welcome to my portfolio website! I'm Utkarsh Deep, a DevOps Lead and AWS certified Solutions Architect with a passion for building highly scalable and resilient infrastructure solutions. My expertise lies in automating infrastructure deployment, continuous integration and delivery, monitoring and alerting, and cloud security.
      </p>
      <p>
        As an AWS certified Solutions Architect, I specialize in designing and implementing solutions using various AWS services such as EC2, S3, RDS, Lambda, CloudFormation, CloudWatch, and more. I've had the opportunity to work with clients from various industries, including healthcare, finance, and e-commerce. I believe in collaborating with clients to understand their unique business requirements and providing solutions that exceed their expectations.
      </p>
      <p>
        On this website, you'll find a showcase of some of my recent projects and work samples. Whether it's designing and implementing a highly available architecture on AWS or automating infrastructure deployment with tools like Terraform and Ansible, I'm always up for a challenge.
      </p>
      <p>
        If you're looking for a DevOps Lead or AWS Solutions Architect for your business, feel free to contact me through the contact page. I'm always happy to chat and discuss your business needs.
      </p>
      Thank you for visiting my portfolio website. I hope you find the information here helpful, and I look forward to working with you!
    </div>
  </div>
  );
}

export default getParallaxHOC(Parellex)