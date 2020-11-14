import React from 'react';
import './Activity.css';
import ac1 from '../assets/images/activity/ac1.png'
import ac1sha from '../assets/images/activity/ac1sha.png'
import ac2 from '../assets/images/activity/ac2.png'
import ac3 from '../assets/images/activity/ac3.png'

class Activity extends React.Component{
    state={
        content : " " ,
        content1 : " " , 
        content2: " "
    }
    changeAc1=()=>{
        this.setState({content:"เที่ยวชมประติมากรรมน้ำแข็ง หิมะสุดแสนอลังการ จากศิลปินและนักแข่งขันทั่วโลก"})
    }
    changeAc2=()=>{
        this.setState({content1:"ปั้นตุ๊กตาหิมะสุดพิเศษด้วยตัวเอง"})
    }
    changeAc3=()=>{
        this.setState({content2:"สนุกสนานไปกับ Tube Slider , Snow rafting และ Snow Stride"})
    }

render(){
    return(
        <div>
            <div class="head">
            <h2>มีกิจกรรมอะไรบ้าง</h2>
            <p>*กดที่รูปภาพเพื่อดูรายละเอียด</p>
            </div>
            
            <img src={ac1} className="imgAc"/>
            <p class="detail">{this.state.content}</p>
            <img src={ac2} className="imgAc"/>
            <p class="detail d1">{this.state.content1}</p>
            <img src={ac3} className="imgAc"/>
            <p class="detail d2">{this.state.content2}</p>

            <button class="button1" type="button" onClick={this.changeAc1}>1</button>
            <button class="button2" type="button" onClick={this.changeAc2}>2</button>
            <button class="button3" type="button" onClick={this.changeAc3}>3</button>
        </div>
    )
}




}
export default Activity;