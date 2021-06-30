import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import { IconButton } from '@material-ui/core'

export default function MyReactPage() {
  const [githubLogo, setGithubLogo] = useState("../build/img/github-white.png")
  useEffect(() => {
    window.addEventListener('click', () => {
      if (document.getElementsByTagName('html')[0].attributes[1].nodeValue === 'dark') setGithubLogo("../build/img/github-white.png");
      else setGithubLogo("../build/img/github-black.png")
    })
  }, [])

  const teamProfiles = [
    {
      name: "Andy Kahn",
      picture: "../build/img/andy.jpeg",
      github: "https://github.com/adkahn",
      linkedIn: "",
    },
    {
      name: "Jeff Chen",
      picture: "../build/img/jeff.png",
      github: "https://github.com/JalexChen",
      linkedIn: "https://www.linkedin.com/in/jalexchen/"
    },
    {
      name: "Lawrence Han",
      picture: "../build/img/larry.jpeg",
      github: "https://github.com/lawrencehan650",
      linkedIn: "https://www.linkedin.com/in/lawrence-han"
    },
    {
      name: "Mika Todd",
      picture: "../build/img/mika.jpeg",
      github: "https://github.com/mikatodd",
      linkedIn: "https://www.linkedin.com/in/mika-todd-b37328105/"
    },
    {
      name: "Patrick Allen",
      picture: "../build/img/patrick.png",
      github: "https://github.com/PatrickAllen1",
      linkedIn: "https://www.linkedin.com/in/patrickallendfs/"
    },
  ]
  const cards = [];
  teamProfiles.forEach(person => {
    cards.push(
      <div className="team-cards">
        <div className="photo">
          <img className="portraits" src={person.picture}/>
        </div>
        <div className="info">
          <h2 className="name">{person.name}</h2>
          <i>Software Engineer</i>
          <br/>
        <div>
          <a href={person.github} target="_blank">
            <IconButton color="secondary">
              <img className="logos" src={githubLogo}/>
            </IconButton>
          </a>
          <a href={person.linkedIn} target="_blank">
            <IconButton color="secondary">
              <img className="logos" src="../build/img/linkedin.png"/>
            </IconButton>
          </a>
        </div>
        </div>
      </div>
    )
  })


  return (
    <Layout>
      <div id="meet-the-team">
        <center><h1>The Ohana Team</h1></center>
        <div id="cards-container">
          {cards}
        </div>
      </div>
    </Layout>
  );
}