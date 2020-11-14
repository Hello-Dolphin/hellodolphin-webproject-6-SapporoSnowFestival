import styled from 'styled-components';

const Heading2 = styled.h2`
  color: ${props => props.color || "var(--color-primary)"};
  font-size: min(64px, 6vw);
  `;
const SubHeading2 = styled.p`
  color: ${props => props.color || "white"};
  font-size: min(18px, 1.6vw);
  `;
const Paragraph = styled.p`
  color: ${props => props.color || "white"};
  font-size: min(24px, 2.1vw);
  width: ${props => props.width};
  line-height: min(40px, 4.4vw);
`;

export {
  Heading2,
  SubHeading2,
  Paragraph
};