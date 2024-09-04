const { useEffect, useState } = React;

const Banner = () => (
  <div className="banner">
    <img src="./assets/banner.jpg" alt="Banner MSA" className="img-fluid" />
  </div>
);

const ProfilePic = () => (
  <div className="profile-pic">
    <img src="./assets/profile-pic.png" alt="MSA" className="rounded-circle" />
  </div>
);

const SocialLinks = () => (
  <div>
    <div class="social-overlap process-scetion">
      <div class="container">
        <div>
            <div>
                <div class="social-icons iconpad">
                    <a class="slider-nav-item" href="https://wa.me/573163405154"><i className="iconify" data-icon="logos:whatsapp-icon"></i></a>
                    <a class="slider-nav-item" href="https://t.me/MaxStoreAccesorios"><i className="iconify" data-icon="logos:telegram"></i></a>
                    <a class="slider-nav-item" href="https://tiktok.com/@maxstoreaccesorios"><i className="iconify" data-icon="logos:tiktok-icon"></i></a>
                    <a class="slider-nav-item" href="https://www.youtube.com/@maxstoreaccesorios2691"><i className="iconify" data-icon="logos:youtube-icon"></i></a>                                                              
                    <a class="slider-nav-item" href="https://instagram.com/maxstoreaccesorios"><i className="iconify" data-icon="brandico:instagram"></i></a>
                    <a class="slider-nav-item" href="https://www.facebook.com/MaxStoreAccesorios/"><i className="iconify" data-icon="logos:facebook"></i></a>                  
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const Watch = () => (
  <div class="social-overlap process-scetion">
    <div class="container">
      <div class="social-icons iconpad">
        <a>
            <div class="clock">
                <div class="hour"></div>
                <div class="min"></div>
                <div class="sec"></div>
            </div>
          </a>
      </div>
    </div>
  </div>
);


const Links = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.cta-button,.cta-button2');

    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        anime({
          targets: button,
          translateY: [
            { value: -10, duration: 30 },
            { value: 10, duration: 30 },  
            { value: -10, duration: 30 },
            { value: 10, duration: 30 },
            { value: 0, duration: 30 }
          ],
          scale: [1, 1.1],
          duration: 30,
          easing: 'easeOutQuart'
        });
      });

      /*button.addEventListener('mouseleave', () => {
        anime({
          targets: button,
          translateY: [
            { value: -10, duration: 30 },
            { value: 10, duration: 30 },  
            { value: -10, duration: 30 },
            { value: 10, duration: 30 },
            { value: 0, duration: 30 }
          ],
          scale: [1.1, 1],
          duration: 30,
          easing: 'easeOutQuart'
        });
      });*/

      // Adding the buzz effect on click
      button.addEventListener('click', () => {
        anime({
          targets: button,
          translateY: [
            { value: -10, duration: 30 },
            { value: 10, duration: 30 },  
            { value: -10, duration: 30 },
            { value: 10, duration: 30 },
            { value: 0, duration: 30 }
          ],
          scale: [1.1, 1],
          duration: 30,
          easing: 'easeOutQuart'
        });
      });
    });

    const animateShake = () => {
      anime({
        targets: '.cta-button',
        translateX: [
          { value: -50, duration: 50 },
          { value: 50, duration: 50 },
          { value: -50, duration: 50 },
          { value: 50, duration: 50 },
          { value: 0, duration: 50 }
        ],
        easing: 'easeInOutQuad',
        //delay: anime.stagger(1000),  // Retardo entre los botones
      });
    };

    animateShake();
    const intervalId = setInterval(animateShake, 2000); //5 Seg
    return () => clearInterval(intervalId);

  }, []);

  return (
    <div>
      <a href="https://maxstoreaccesorios.wixsite.com/maxstoreaccesorios" className="cta-button">Catálogo</a>
      <a href="https://bit.ly/Catalogo_Drive_MSA" className="cta-button2">Destacados del mes</a>
      <section>
        <div class="square_box box_three"></div>
      </section>
    </div>    
  );
};

const Footer = () => (
  <div class="footer">
    <hr></hr><br></br>
		&copy; 2024 <a href="http://maxstoreaccesorios.com">MaxStoreAccesorios</a>
	</div>
);

const App = () => (
  <div className="container text-center mt-5">
    <Banner />
    <ProfilePic />
    <h1>MaxStoreAccesorios</h1>
    <SocialLinks />
    <p className="mt-3">No pierdas tiempo! ⌚</p>
    <Watch />
    <Links />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
