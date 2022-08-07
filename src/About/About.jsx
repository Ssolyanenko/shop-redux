import React from 'react';
import s from './about.module.css'
const About = () => {
    return (
        <div>
            <div className={s.about}><img src="https://roi4cio.com/fileadmin/user_upload/Andersen_Logo.jpg" alt="img"/>
            </div>
            <h3>О компании «Andersen» Команда, создающая качественное программное обеспечение для клиентов на всех континентах, кроме (пока что) Антарктиды. Компания основана в 2007 году и за это время успешно пережила все кризисы. Без сокращений и потрясений, всё это время продолжая расти. </h3>
        </div>
    );
};

export default About;