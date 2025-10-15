import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './team.module.css';

import GithubIcon from '@site/static/img/github.svg';
import LinkedInIcon from '@site/static/img/linkedin.svg';
import Mail from '@site/static/img/mail.svg';

const teamMembers = [
  {
    fname: 'Alexandre',
    lname: 'Andrade',
    img: require('@site/static/img/team/alexandre.jpg').default,
    github: 'https://github.com/Alexandre-A',
    linkedin:"https://www.linkedin.com/in/alexandre-andrade-/"
  },
  {
    fname: 'André',
    lname: 'Martins',
    img: require('@site/static/img/team/andre.jpg').default,
    github: "https://github.com/Pencsss",
    linkedin:"https://www.linkedin.com/in/andr%C3%A9-martins-998110208/"
  },
  {
    fname: 'João',
    lname: 'Pereira',
    img: require('@site/static/img/team/joao.jpg').default,
    github: 'https://github.com/JPSP9547',
    linkedin:"https://www.linkedin.com/in/jo%C3%A3o-pereira-b01438352/"
  },
  {
    fname: 'Miguel',
    lname: 'Neto',
    img: require('@site/static/img/team/miguel.jpg').default,
    github: 'https://github.com/alxmra',
    linkedin:"https://www.linkedin.com/in/alxmra/"
  },
  {
    fname: 'Thiago',
    lname: 'Vicente',
    img: require('@site/static/img/team/thiago.jpg').default,
    github: 'https://github.com/ThiagoAVicente',
    linkedin:"www.linkedin.com/in/thiagoavicente"
  }
];

const tutors = [
  {
    fname: 'Rafael',
    lname: 'Teixeira',
    img: require('@site/static/img/github.svg').default,
    mail:"rafaelgteixeira@ua.pt"
  },
  {
    fname: 'Rafael',
    lname: 'Direito',
    img: require('@site/static/img/github.svg').default,
    mail:"rafael.neves.direito@ua.pt",
    github:"https://github.com/rafael-direito"
  },
  {
    fname: 'Rui',
    lname: 'Aguiar',
    img: require('@site/static/img/github.svg').default,
    mail:"ruilaa@ua.pt"
  },

];

const teamMemberStruct={
  title:"Team Members",
  data:teamMembers
}
const tutorStruct={
  title:"Tutors",
  data:tutors
}

function avatars(data){
  return (
    <Layout title="Team members" description="Project team members">
      <main className={styles.main}>
        {data.map((struct, index) => (
          <div key={index} style={{ marginBottom: '3rem' }}>
            <h1 className={styles.title}>{struct.title}</h1>
            <div className={styles.cardsContainer}>
              {struct.data.map((member, idx) => (
                <div key={idx} className={styles.card}>
                  <img src={member.img ? member.img : undefined} alt="img" className={styles.avatar} />
                  <h3>{member.fname}<br/>{member.lname}</h3>
                  <div className={styles.links}>
                    {member.github && (
                      <Link to={member.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className={styles.icon} />
                      </Link>
                    )}
                    {member.linkedin && (
                      <Link to={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className={styles.icon} />
                      </Link>
                    )}
                    {member.mail && (
                      <Link to={`mailto:${member.mail}`} target="_blank" rel="noopener noreferrer">
                        <Mail className={styles.icon} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
}

export default function Team() {
  return avatars([teamMemberStruct,tutorStruct]);
}
