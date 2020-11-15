import React from 'react';
import './Story.css';
import snowman from '../assets/images/mascot/mascot2.png'

class Story extends React.Component{

    state={
        object:"เทศกาลหิมะนี้ เริ่มขึ้นมาในปี ค.ศ. 1950 โดยกลุ่มนักเรียน มัธยมที่มาช่วยกันปั้นตุ๊กตาหิมะมากมายในสวนสาธารณะโอโดริ ซึ่งเป็นสวนสาธารณะประจำเมือง นับแต่นั้นเป็นต้นมา ก็มีการ ปั้นหิมะมากขึ้นทุกปีๆ จนกลายมาเป็นเทศกาลใหญ่สุดอลังการ ในปัจจุบัน"   
    }
    

    render(){
        return(
    <div className="object">
        <img class ="test" src={snowman}></img>
        <h2>ความเป็นมา</h2><br/>
        <div class="story">
        <p>{this.state.object}</p>   
        </div>
    </div>
        )
    }
    
}
export default Story;