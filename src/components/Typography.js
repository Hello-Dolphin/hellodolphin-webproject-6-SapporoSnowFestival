import styled from 'styled-components';

const Heading2 = styled.h2`
  color: ${props => props.color || "var(--color-primary)"};
  font-size: min(64px, 5vw);
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
  `;
const SubHeading2 = styled.p`
  color: ${props => props.color || "white"};
  font-size: min(18px, 1.4vw);
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.4vw;
  }
`;
const Paragraph = styled.p`
  color: ${props => props.color || "white"};
  font-size: min(24px, 1.9vw);
  width: ${props => props.pWidth};
  max-width: ${props => props.pMaxWidth};
  height: ${props => props.pHeight};
  line-height: min(40px, 3.8vw);
  text-indent: ${props => props.textIndent};
  text-align: ${props => props.justify ? "justify" : "left"};
  @media (max-width: 768px) {
    font-size: 1.9vw;
  }
`;

export {
  Heading2,
  SubHeading2,
  Paragraph
};