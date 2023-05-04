// import React from 'react'

// export default function CertificatePage() {
//   return (
//     <div>CertificatePage</div>
//   )
// }

import { useCallback } from "react";
import styles from "./Certificate.module.css";
// import rectangle10 from "./Cert/rectangle-10.svg"
import rectangle72x from "./Cert/rectangle-7@2x.png"
import group8 from "./Cert/group-8.svg"
import group10 from "./Cert/group-10.svg"
// import group101 from "./Cert/group-101.svg"
import group13 from "./Cert/group-13.svg"
import group14 from "./Cert/group-14.svg"
import group17 from "./Cert/group-17.svg"



const CertificatePage = () => {
  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Quiz Question 2 Correct Answer" to the project
  }, []);

  function handleClick() {
    window.location.href = "/Quiz"; 
  }

  return (
    
    
    <div className={styles.lo}>
      <img
        className={styles.quizQuestion2CorrectAnswerChild}
        alt=""
        src={rectangle72x}
      />
      <img
        className={styles.quizQuestion2CorrectAnswerItem}
        alt=""
        src={group8}
      />
      <img
        className={styles.quizQuestion2CorrectAnswerInner}
        alt=""
        src={group17}
      />
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <img className={styles.groupInner} alt="" src={group10} />
          <img className={styles.groupIcon} alt="" src={group10} />
          <b className={styles.certificateOfOcean}>
            Certificate of Ocean Friendship
          </b>
          {/* <div className={styles.malletTheShark}>Kiyomi</div> */}
        </div>
        <div className={styles.thisCertificateIsContainer}>
          <p className={styles.thisCertificateIs}>
            {/* This certificate is Awarded to ..................
            .................  For being a treasured friend to the ocean. */}
                        This certificate is Awarded 
             for being a treasured friend to the ocean.
          </p>
          <p className={styles.thisCertificateIs}>&nbsp;</p>
          <p className={styles.signedDa}>
            {/* Signed ....Kiyomi............ Date:............. */}
            {/* Signed ....Kiyomi............  */}
          </p>
        </div>
      </div>
      <img
        className={styles.quizQuestion2CorrectAnswerChild1}
        alt=""
        src={group13}
      />
      <img
        className={styles.quizQuestion2CorrectAnswerChild2}
        alt=""
        src={group14}
      />
      <div className={styles.groupContainer} onClick={onGroupContainer3Click}>
        {/* <img className={styles.groupChild1} alt="" src={group101} /> */}
        <div className={styles.vectorParent}>
          {/* <img
            className={styles.rectangleIcon}
            alt=""
            src={rectangle10}
          /> */}
          <button className={styles.hookbutton1} onClick={handleClick}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;

