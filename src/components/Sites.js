import React from 'react';
import './Sites.css';
import place1 from '../assets/images/place/place1.png';
import place2 from '../assets/images/place/place2.png';
import place3 from '../assets/images/place/place3.png';
import mascot4 from '../assets/images/mascot/mascot4.png';
import { SectionContainerBG, FlexColumnContainer, FlexRowContainer } from './Containers';
import { Heading2, Paragraph } from './Typography';
import bg3 from '../assets/images/bg/bg3.png';
import styled from 'styled-components';
import resetAnimation from '../utils/resetAnimation';

const DetailContainer = styled(FlexColumnContainer)`
  /* top: 5vw; */
  /* left: 10vw; */
  /* width: min(600px, 35vw); */
  width: auto;
  align-items: flex-start;
`;

const sitesContent = {
  odori: {
    content: "ลานจัดงานโอโดริ คือ ลานจัดงานภายในสวนโอโดริ ซึ่งตั้งอยู่กลางเมืองซัปโปโรทอดยาวจากฝั่งตะวันออกไปยังตะวันตก จัดแสดงประติมากรรม หิมะขนาดยักษ์ตลอดเส้นทางยาวกว่า 1.5 กิโลเมตร แถมยังมีไลท์อัพประดับไฟตอนกลางคืนด้วย",
    src: place1
  },
  tsudome: {
    content: "ลานจัดงานซึโดมุ คือ ลานจัดงานบริเวณซึโดมุ ซึ่งเป็นฮอลล์อเนกประสงค์ของเมืองซัปโปโร ตั้งอยู่ในเขตชานเมืองของเมืองซัปโปโรใกล้กับสถานี Sakaemachi มีกิจกรรมให้เล่นอย่างสนุกสนานหลายอย่าง เช่น สไลเดอร์จากหิมะขนาดยักษ์",
    src: place2
  },
  susukino: {
    content: "ลานจัดงานซูซูกิโนะ คือ ลานจัดงานภายในย่านซูซูกิโนะ ซึ่งเป็นย่านของกินของซัปโปโร ภายในงานจัดแสดงประติมากรรมน้ำแข็งเป็นหลัก แถมยังมีลานกว้างสำหรับสัมผัสกับประติมากรรมน้ำแข็งได้และโซนไอซ์บาร์ที่มีบริการเครื่องดื่มด้วย",
    src: place3
  }
}

class Sites extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSite: "odori",
      content: sitesContent.odori.content,
      src: sitesContent.odori.src,
    }
    this.imgRef = React.createRef();
    this.contentRef = React.createRef();
  }

  handleClick = (siteName) => {
    siteName = siteName.toLowerCase();
    if (this.state.currentSite === siteName) return;
    let siteContent = sitesContent[siteName];
    this.setState({
      currentSite: siteName,
      content: siteContent.content,
      src: siteContent.src
    })
    resetAnimation(this.contentRef.current);
    resetAnimation(this.imgRef.current);
  }

    render() {
        return (
        <SectionContainerBG bg={bg3} {...this.props}>
          {this.props.waypoint}
          <FlexRowContainer>
          <DetailContainer>
            <Heading2>สถานที่จัดงาน</Heading2>
            <Paragraph ref={this.contentRef}
              pWidth="min(560px, 40vw)"
              pMaxWidth="40vw"
              pHeight="min(230px, 22vw)"
              textIndent="96px"
              justify
              className="content animate"
            >
              {this.state.content}
            </Paragraph>
            <div className="btn-group">
              <button className="button btn1" type="button" onClick={() => this.handleClick("odori")}>1</button>
              <button className="button btn2" type="button" onClick={() => this.handleClick("tsudome")}>2</button>
              <button className="button btn3" type="button" onClick={() => this.handleClick("susukino")}>3</button>
            </div>
          </DetailContainer>
          <img src={this.state.src} ref={this.imgRef} alt="Sites" className="site animate"/>
          </FlexRowContainer>

          <img src={mascot4} alt="Mascot 4" className="mascot4"/>
        </SectionContainerBG>
        )
    }
}

export default Sites;