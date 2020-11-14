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
  top: 5vw;
  left: 10vw;
  width: min(600px, 35vw);
  align-items: flex-start;
`;

class Place extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        content : "ลานจัดงานโอโดริ คือ ลานจัดงานภายใน  สวนโอโดริ ซึ่งตั้งอยู่กลางเมืองซัปโปโรทอดยาวจาก ฝั่งตะวันออกไปยังตะวันตก จัดแสดงประติมากรรม หิมะขนาดยักษ์ตลอดเส้นทางยาวกว่า 1.5 กิโลเมตร แถมยังมีไลท์อัพประดับไฟตอนกลางคืนด้วย",
    }
    this.imgRef = React.createRef();
    this.contentRef = React.createRef();
  }

  changeOdori = () => {
      this.imgRef.current.setAttribute("src", place1)
      resetAnimation(this.contentRef.current);
      resetAnimation(this.imgRef.current);
      this.setState({content : "ลานจัดงานโอโดริ คือ ลานจัดงานภายใน  สวนโอโดริ ซึ่งตั้งอยู่กลางเมืองซัปโปโรทอดยาวจาก ฝั่งตะวันออกไปยังตะวันตก จัดแสดงประติมากรรม หิมะขนาดยักษ์ตลอดเส้นทางยาวกว่า 1.5 กิโลเมตร แถมยังมีไลท์อัพประดับไฟตอนกลางคืนด้วย" })
  }
  changeTsudome = () =>{
      this.imgRef.current.setAttribute("src", place2)
      resetAnimation(this.contentRef.current);
      resetAnimation(this.imgRef.current);
      this.setState({content : "ลานจัดงานซึโดมุ คือ ลานจัดงานบริเวณซึโดมุ ซึ่งเป็นฮอลล์อเนกประสงค์ของเมืองซัปโปโร ตั้งอยู่ในเขตชานเมืองของเมืองซัปโปโรใกล้กับสถานี Sakaemachiมีกิจกรรมให้เล่นอย่างสนุกสนานหลายอย่าง เช่น สไลเดอร์จากหิมะขนาดยักษ์"})
  }
  changeSusukino = () =>{
      this.imgRef.current.setAttribute("src", place3)
      resetAnimation(this.contentRef.current);
      resetAnimation(this.imgRef.current);
      this.setState({content : "ลานจัดงานซูซูกิโนะ คือ ลานจัดงาน ภายในย่านซูซูกิโนะ ซึ่งเป็นย่านของกินของซัปโปโร ภายในงานจัดแสดงประติมากรรมน้ำแข็งเป็นหลัก แถมยังมีลานกว้าง สำหรับสัมผัสกับประติมากรรม  น้ำแข็งได้และโซนไอซ์บาร์ที่มีบริการเครื่องดื่มด้วย"})
  }

    render() {
        return (
        <SectionContainerBG bg={bg3} {...this.props}>
          <DetailContainer>
            <Heading2>สถานที่จัดงาน</Heading2>
            <Paragraph ref={this.contentRef} pWidth="min(565px, 43vw)" textIndent="66px" justify className="content">{this.state.content}</Paragraph>
            <div className="btn-group">
              <button class="button btn1" type="button" onClick={this.changeOdori}>1</button>
              <button class="button btn2" type="button" onClick={this.changeTsudome}>2</button>
              <button class="button btn3" type="button" onClick={this.changeSusukino}>3</button>
            </div>
          </DetailContainer>
          <img src={place1} ref={this.imgRef} alt="Locations" className="site"/>

          <img src={mascot4} className="mascot4"/>
        </SectionContainerBG>
        )
    }
}

export default Place;