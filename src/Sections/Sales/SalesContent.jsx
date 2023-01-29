import "./Sales.css";
import { CloudServerOutlined, DatabaseTwoTone, AlertTwoTone, SafetyCertificateTwoTone} from '@ant-design/icons';
import Button from "../../Components/Button/Button";
import Divider from "../../Components/Divider";
import Card from "../../Components/Card/Card";
import IconContainer from "../../Components/IconContainer/IconContainer";
export default function SalesContent(){
    return(
        <div className='sales-content'>
          <div className='card-container'>
            <div className='container'>
              <Card onClick={() => console.log()} id="data-sec" title="Data Security" description="There are advancements being made in science and technology" icon={<IconContainer color="8be8b6" icon={<SafetyCertificateTwoTone className="large" twoToneColor="#8be8b6" />} />}>
                
              </Card>
              <Card onClick={() => console.log()} id="databases" title="On Site Databases" description="There are advancements being made in science and technology" icon={<IconContainer color="ef71ff" icon={<DatabaseTwoTone className="large" twoToneColor="#ef71ff" />}/>}>
                
              </Card>
            </div>
            <div className='container margin-top'>
              <Card onClick={() => console.log()} id="cloud" title="Cloud Solutions" style description="There are advancements being made in science and technology" icon={<IconContainer color="a3d8fd" icon={<CloudServerOutlined className="large" style={{color: "#ffffff"}} />} />}>
              </Card>
              <Card onClick={() => console.log()} id="websites" title="Modern Websites" description="There are advancements being made in science and technology" icon={<IconContainer color="ff9d78" icon={<AlertTwoTone className="large" twoToneColor="#ff9d78" />}/>}>

              </Card>
            </div>
          </div>
            <div className='extra'>
              <p className="extra-text large">Experienced and Skilled</p>
              <Divider />
              <p className="small al">
                From setting up the most complex infrastructure to procuring the appropriate hardware, we are a start-to-finish solution that provides a single point of accountability to make running your business easier.
              </p>
              <Button id="sales-button" onClick={() => console.log()} text="See Why" className="learn-more align-left" />
            </div>
        </div>
    );
}