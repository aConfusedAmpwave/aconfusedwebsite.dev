import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {  faInstagram, faDiscord, faBluesky, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

const logoLookup = {
    "Instagram": faInstagram,
    "Discord": faDiscord,
    "Bluesky": faBluesky,
    "Github": faGithub,
    "Linkedin": faLinkedin,
    "Email": faEnvelope,
}

export default function getLogo(id: string): JSX.Element {
    return <FontAwesomeIcon icon={logoLookup[id]} className="fa-logo"/>
}