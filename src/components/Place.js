import React from 'react';
import './Place.css';
import place1 from '../assets/images/place/place1.png';
import place2 from '../assets/images/place/place2.png';
import place3 from '../assets/images/place/place3.png';
import mascot4 from '../assets/images/mascot/mascot4.png';

class Place extends React.Component {

    state={
        content : "ลานจัดงานโอโดริ คือ ลานจัดงานภายใน  สวนโอโดริ ซึ่งตั้งอยู่กลางเมืองซัปโปโรทอดยาวจาก ฝั่งตะวันออกไปยังตะวันตก จัดแสดงประติมากรรม หิมะขนาดยักษ์ตลอดเส้นทางยาวกว่า 1.5 กิโลเมตร แถมยังมีไลท์อัพประดับไฟตอนกลางคืนด้วย",
        imgRef: React.createRef()
    }
    imgRef = React.createRef();

    changeOdori=()=>{
        this.imgRef.current.setAttribute("src", place1)
        this.setState({content : "ลานจัดงานโอโดริ คือ ลานจัดงานภายใน  สวนโอโดริ ซึ่งตั้งอยู่กลางเมืองซัปโปโรทอดยาวจาก ฝั่งตะวันออกไปยังตะวันตก จัดแสดงประติมากรรม หิมะขนาดยักษ์ตลอดเส้นทางยาวกว่า 1.5 กิโลเมตร แถมยังมีไลท์อัพประดับไฟตอนกลางคืนด้วย" })
    }
    changeTsudome=()=>{
        this.imgRef.current.setAttribute("src", place2)
        this.setState({content : "ลานจัดงานซึโดมุ คือ ลานจัดงานบริเวณซึโดมุ ซึ่งเป็นฮอลล์อเนกประสงค์ของเมืองซัปโปโร ตั้งอยู่ในเขตชานเมืองของเมืองซัปโปโรใกล้กับสถานี Sakaemachiมีกิจกรรมให้เล่นอย่างสนุกสนานหลายอย่าง เช่น สไลเดอร์จากหิมะขนาดยักษ์"})
    }
    changeSusukino=()=>{
        this.imgRef.current.setAttribute("src", place3)
        this.setState({content : "ลานจัดงานซูซูกิโนะ คือ ลานจัดงาน ภายในย่านซูซูกิโนะ ซึ่งเป็นย่านของกินของซัปโปโร ภายในงานจัดแสดงประติมากรรมน้ำแข็งเป็นหลัก แถมยังมีลานกว้าง สำหรับสัมผัสกับประติมากรรม  น้ำแข็งได้และโซนไอซ์บาร์ที่มีบริการเครื่องดื่มด้วย"})
    }

    render() {
        return (

    <div className="content">
        <div className="header"><h2 className="location">สถานที่จัดงาน</h2><br/></div>

        <div class="odori mb-5">
        <p>{this.state.content}<img src={place1} ref={this.imgRef} className="img"/></p>
        </div>
        <br />
        <button class="button btn1" type="button" onClick={this.changeOdori}>1</button>
        <button class="button btn2" type="button" onClick={this.changeTsudome}>2</button>
        <button class="button btn3" type="button" onClick={this.changeSusukino}>3</button>

        <img src={mascot4} className="mascot4"/>   
    </div>        
        )
    }
}

export default Place;