import styles from "./page.module.css";
import Image from "next/image"
import slide1Pic from "./public/static/images/1.jpg"
import slide2Pic from "./public/static/images/2.jpg"
import slide3Pic from "./public/static/images/3.jpg"
import Wavey from "./components/wavey/wavey";
import { Pillar, BluePillar } from "./components/pillar/pillar";

export default function Home() {
  return (
    <main>
      <div className={styles.homenav + " container d-flex justify-content-evenly"}>
        <BluePillar color="#ff84f1">
          <p>2D Art</p>
        </BluePillar>
        <Pillar color="#edff65">
          <p>3D Art</p>
        </Pillar>
        <Pillar color="#96e6ff">
          <p>Graphic Design</p>
        </Pillar>
        <Pillar color="#ffaf80">
          <p>Ceramics</p>
        </Pillar>
      </div>
      <Wavey>
        <p>testing</p>
      </Wavey>
      <Wavey offsetPercent={"75%"} topMargin={-100}>
        <div className="my-5">
          <h2>Featured Student Work</h2>
          <div id="homeCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src={slide1Pic} alt="..." />
              </div>
              <div className="carousel-item">
                <Image src={slide2Pic} alt="..." />
              </div>
              <div className="carousel-item">
                <Image src={slide3Pic} alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <a href="#" className="btn btn-outline-dark">View More...</a>
          </div>
        </div>
      </Wavey>
    </main>
  );
}
