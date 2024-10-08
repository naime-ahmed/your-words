import { useEffect, useState } from "react";
import styles from "./Testimonial.module.css";

const Testimonial = ({ lane }) => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/DB/testimonials.json")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => {
        console.log("Error fetching testimonials", error);
      });
  }, []);
  //   console.log(lane);
  return (
    <div className={styles.testimonialsCardContainer}>
      <div className={styles.testimonialsMarquee}>
        <div className={styles[lane]}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialItem}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialText}>{item.review}</div>
                <div className={styles.testimonialProfile}>
                  <img
                    src={item.image}
                    className={styles.profileImage}
                    alt={item.name}
                  />
                  <div className={styles.profileInfo}>
                    <div className={styles.profileName}>{item.name}</div>
                    <div className={styles.profileTitle}>{item.profession}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
