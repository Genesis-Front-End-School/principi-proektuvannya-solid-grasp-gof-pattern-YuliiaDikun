import React from 'react'
import { ImLinkedin, ImGithub, ImTwitter } from "react-icons/im";
import { SocialLinksWrapper } from './SocialMedia.styled';
const SocialMedia:React.FC = () => {
  return (
    <SocialLinksWrapper data-testid="footer-social">
      <a
        data-testid="linkedin"
        href="https://www.linkedin.com/in/yuliia-dikun/"
        target="_blank"
        rel="noreferrer"
      >
        <ImLinkedin size={35} />
      </a>
      <a
        data-testid="github"
        href="https://github.com/YuliiaDikun" target="_blank" rel="noreferrer">
        <ImGithub size={35} />
      </a>
      <a
        data-testid="twitter"
        href="https://twitter.com/Midnight_Jul"
        target="_blank"
        rel="noreferrer"
      >
        <ImTwitter size={35} />
      </a>
    </SocialLinksWrapper>
  );
}

export { SocialMedia }