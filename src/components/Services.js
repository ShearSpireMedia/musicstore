import React from 'react';
import Title from './Title';
import {FaMusic,FaHandsHelping,FaMoneyCheckAlt,FaHome} from 'react-icons/fa';

function Services() {
    const services = [
        {icon:<FaMusic />,title:"Quality of Life",info:"Studying a musical instrument improves quality of life, especially for children and older adults."},
        {icon:<FaHandsHelping />,title:"Customer Service",info:"We can help you get started with a great instrument, lessons, and lifetime support."},
        {icon:<FaMoneyCheckAlt />,title:"Great Prices",info:"Musical instruments are available to fit any budget. Start with an inexpensive student instrument."},
        {icon:<FaHome />,title:"Music at Home",info:"Start today. Bring the joy of music into your home with a new musical instrument."}
    ];

    return (
        <div>
            <section className="services">
                <Title title="Musings" />
                <div className="services-center">
                    {services.map((item,index) => {
                        return (<article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>);
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default Services;
