import Image from 'next/image'

export default function Home() {
  return (
    <div class="root">
        <div class="header">
            <a target="_blank" href="https://github.com/ABDILLAH12846">
                <span>Github</span>
            </a>
            <span>/</span>
            <a target="_blank" href="https://www.linkedin.com/in/abdillah-zikri-alhusni-576599211/">
                <span>Linkedin</span>
            </a>
            <span>/</span>
            <a target="_blank" href="https://www.instagram.com/a.zikri_al/">
                <span>Instagram</span>
            </a>
        </div>
        <div class="value">
            <div class="wrapper">
                <h1>I’am Abdillah Zikri Alhusni.</h1>
                <h2>A Fullstack
                    Developer and Cloud Enginer
                </h2>
                <p>
                    A Fullstack Developer with expertise in React.js,
                    React Native, Node.js, Express.js, and FastAPI. And a Cloud Engineer skilled in Docker, Kubernetes,
                    CI/CD, and more, proficient in deploying and managing cloud applications with a focus on automation
                    and
                    scalability.
                </p>
            </div>
        </div>
        <div class="footer">
            <a href="mailto:abdikl479@gmail.com" class="btn">Contact Me</a>
        </div>
    </div>
  )
}
