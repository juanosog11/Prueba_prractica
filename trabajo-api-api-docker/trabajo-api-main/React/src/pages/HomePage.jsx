import React from 'react'
import './style.css'
import { Link } from "react-router-dom"



export default function HomePage() {
    <link rel="stylesheet" href="style.css" />
    return (

        <div className='body'>
            <header id="header" className="header">

                <div className="header-content container">
                    <div className="header-txt">
                        <h1>Servitrayectos</h1>

                        <p>
                            Somos una empresa de vehículos particulares autorizados para trayectos en Medellín - área
                            metropolitana, municipales, desde y hacia los aeropuertos.
                        </p>

                        <a  className="btn-1"><Link to='/agendar'
                            >
                            Agendar
                        </Link></a>

                    </div>

                    
                </div>
            </header>

            <section className="direction container">
                <p>Correo: <a href="mailto:" className="color-correo">servitrayectos@gmail.com</a></p>
                <p>Numero/WhatApp: <a href="tel:+57" className="color-correo">3104617715</a></p>


            </section>

            <section className="about container">
                <div className="about-img">
                    <img src="/Imagenes/Logofondo.jpg" alt="" />
                </div>
                <div className="about-txt">
                    <h2>Nosotros</h2>
                    <p>
                        En Servitrayectos, nos enorgullece ser líderes en el servicio de transporte de vehículos
                        particulares en Medellín y su área metropolitana. Nos dedicamos a proporcionar a nuestros clientes
                        experiencias de viaje excepcionales, ya sea en trayectos municipales, recorridos locales o traslados
                        desde y hacia los aeropuertos.
                    </p>

                </div>
            </section>

            <main className="information container">
                <div className="information-1">
                    <h3>15</h3>
                    <p>mensiones</p>
                </div>

                <div className="information-1">
                    <h3>150</h3>
                    <p>casas</p>
                </div>

                <div className="information-1">
                    <h3>1532</h3>
                    <p>mdepartamentos</p>
                </div>

                <div className="information-1">
                    <h3>15</h3>
                    <p>casa de playa</p>
                </div>
            </main>

            <section className="about2 container">

                <div className="about-txt">
                    <h2>Nuestra Flota</h2>
                    <p>
                        Contamos con una flota diversa de vehículos modernos y bien mantenidos para satisfacer las
                        necesidades de todos nuestros clientes. Desde vehículos cómodos y eficientes para trayectos urbanos
                        hasta opciones de lujo para aquellos que buscan un toque adicional de elegancia en sus
                        desplazamientos, en Servitrayectos nos esforzamos por ofrecer la elección perfecta para cada
                        ocasión.
                    </p>

                </div>

                <div className="about-img">
                    <img src="Imagenes/template.jpg" alt="" />
                </div>

            </section>

            <section className="about container">

                <div className="about-img">
                    <img src="Imagenes/template.jpg" alt="" />
                </div>
                <div className="about-txt">
                    <h2>Compromiso con la Seguridad</h2>
                    <p>
                        La seguridad de nuestros pasajeros es nuestra máxima prioridad. Todos nuestros conductores están
                        debidamente capacitados y certificados, y nuestros vehículos están equipados con las últimas
                        tecnologías de seguridad. Además, implementamos medidas adicionales para garantizar que cada viaje
                        sea seguro y tranquilo.
                    </p>
                </div>

            </section>


            <section className="about2 container">

                <div className="about-txt">
                    <h2>Reservas Convenientes</h2>
                    <p>
                        Facilitamos la planificación de tus viajes al ofrecer un sistema de reservas en línea fácil de usar. Ya
                        sea que necesites un traslado puntual al aeropuerto o desees programar tu transporte para una reunión
                        importante, puedes confiar en que Servitrayectos estará allí para atender tus necesidades.
                    </p>

                </div>

                <div className="about-img">
                    <img src="Imagenes/template.jpg" alt="" />
                </div>

            </section>

            <section className="about container">

                <div className="about-img">
                    <img src="Imagenes/template.jpg" alt="" />
                </div>
                <div className="about-txt">
                    <h2>Transparencia en las Tarifas</h2>
                    <p>
                        En Servitrayectos, creemos en la transparencia. Nuestras tarifas son claras y competitivas, sin
                        sorpresas desagradables. Calculamos nuestras tarifas de manera justa y ofrecemos opciones de tarifas
                        fijas para ciertos trayectos populares, brindando a nuestros clientes la tranquilidad de conocer el
                        costo de su viaje de antemano.
                    </p>
                </div>

            </section>


            <section className="about2 container">

                <div className="about-txt">
                    <h2>Compromiso Ambiental</h2>
                    <p>
                        Somos conscientes del impacto ambiental de nuestras operaciones y nos comprometemos a reducir nuestra
                        huella. Servitrayectos ha implementado iniciativas ecológicas, como la incorporación de vehículos de
                        bajo consumo o eléctricos, contribuyendo así a la sostenibilidad ambiental de la región.
                    </p>

                </div>

                <div className="about-img">
                    <img src="./Imagenes/template.jpg" alt="" />
                </div>

            </section>

            <section className="about container">

                <div className="about-img">
                    <img src="./Imagenes/template.jpg" alt="" />
                </div>
                <div className="about-txt">
                    <h2>Atención al Cliente Inigualable</h2>
                    <p>
                        Nuestro equipo de atención al cliente está disponible las 24 horas, los 7 días de la semana, para
                        brindar asistencia y resolver cualquier pregunta o inquietud que puedas tener. Nos esforzamos por
                        superar las expectativas de nuestros clientes, asegurándonos de que cada viaje con Servitrayectos sea
                        una experiencia positiva.
                    </p>
                </div>

            </section>

            <footer className="footer container">
                <div className="footer-content">
                    <div className="footer-form form">
                        <h2>Contactanos</h2>
                        <form action="https://formsubmit.co/juanpaoso01@gmail.com" method="POST">
                            <input className="campo" type="text" placeholder="Nombre" name="Nombre" />
                            <input type="email" className="campo" placeholder="Correo" name="correo" />
                            <textarea className="campo" cols="30" rows="10" placeholder="Escribenos" name="comentario"></textarea>
                            <input type="submit" value="enviar" className="btn-2" />

                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next"
                                value="http://localhost/proyecto/index.html" />

                        </form>
                    </div>

                    <div className="footer-txt">
                        <p className="color-correo"> Correo: <a href="mailto:" className="color-correo">servitrayectos@gmail.com</a></p>
                        <p className="color-correo">Numero/WhatApp: <a href="tel:+57" className="color-correo">3104617715</a></p>
                    </div>
                </div>

                <div className="footer-2">

                </div>
            </footer>

            <script src="scripts.js"></script>
        </div>
    )
}
