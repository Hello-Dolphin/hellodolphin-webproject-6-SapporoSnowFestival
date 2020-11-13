import React from 'react';
import './Place.css';
import place1 from '../assets/images/place/place1.png';

class Place extends React.Component {

    state={
        content : "ลานจัดงานโอโดริ คือ ลานจัดงานภายใน  สวนโอโดริ ซึ่งตั้งอยู่กลางเมืองซัปโปโรทอดยาวจาก ฝั่งตะวันออกไปยังตะวันตก จัดแสดงประติมากรรม หิมะขนาดยักษ์ตลอดเส้นทางยาวกว่า 1.5 กิโลเมตร แถมยังมีไลท์อัพประดับไฟตอนกลางคืนด้วย" 
    }

    changeOdori=()=>{
        this.setState({content : "ลานจัดงานโอโดริ คือ ลานจัดงานภายใน  สวนโอโดริ ซึ่งตั้งอยู่กลางเมืองซัปโปโรทอดยาวจาก ฝั่งตะวันออกไปยังตะวันตก จัดแสดงประติมากรรม หิมะขนาดยักษ์ตลอดเส้นทางยาวกว่า 1.5 กิโลเมตร แถมยังมีไลท์อัพประดับไฟตอนกลางคืนด้วย" })
    }
    changeTsudome=()=>{
        this.setState({content : "ลานจัดงานซึโดมุ คือ ลานจัดงานบริเวณซึโดมุ ซึ่งเป็นฮอลล์อเนกประสงค์ของเมืองซัปโปโร ตั้งอยู่ในเขตชานเมืองของเมืองซัปโปโร ใกล้กับสถานี Sakaemachi มีกิจกรรมให้เล่นอย่างสนุกสนาน หลายอย่าง เช่น สไลเดอร์จากหิมะขนาดยักษ์"})
    }
    changeSusukino=()=>{
        this.setState({content : "ลานจัดงานซูซูกิโนะ คือ ลานจัดงาน ภายในย่านซูซูกิโนะ ซึ่งเป็นย่านของกินของซัปโปโร ภายในงานจัดแสดงประติมากรรมน้ำแข็งเป็นหลัก แถมยังมีลานกว้าง สำหรับสัมผัสกับประติมากรรม  น้ำแข็งได้ และโซนไอซ์บาร์ที่มีบริการเครื่องดื่มด้วย"})
    }

    render() {
        return (

    <div className="content">
        <h2>สถานที่จัดงาน</h2><br/>

        <div class="odori">
        <p>{this.state.content}<img src={place1} className="img"/></p>

       
        <button class="oo" type="button" onClick={this.changeOdori}>odori</button>
        <button type="button" onClick={this.changeTsudome}>tsudome</button>
        <button type="button" onClick={this.changeSusukino}>susukino</button>
       

        </div>
    </div>            
        )
    }
}

export default Place;