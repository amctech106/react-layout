import About from "../assets/about.png";
import Phone from "../assets/phone.png";
import Send from "../assets/send.png";
import People from "../assets/people.png";
import Search from "../assets/search.png";
import Service from "../assets/service.png";

function Aboutf() {
  return (
    <div className="tableDiv">
    <table className="table">
      <thead>
        <tr>
          <td>
            <img src={About} alt="about" className="aboutPng" />
            <span className="word">About Us</span>
          </td>
          <td>
            <img src={Phone} alt="phone" className="phone" />
            <span className="word">Mobile</span>
          </td>
          <td>
            <img src={Send} alt="send" className="send" />
            <span className="word">Send Us</span>
          </td>
        </tr>
        <tr>
          <td className="para">
            Lorem ipsum dolor sit, amet consectetur elit.
          </td>
          <td className="para">
            Lorem ipsum dolor sit, amet consectetur elit.
          </td>
          <td className="para">
            Lorem ipsum dolor sit, amet consectetur elit.
          </td>
        </tr>
      </thead>
      <tbody className="body">
        <tr>
          <td>
            <img src={People} alt="people" className="aboutPng" />
            <span className="word">People</span>
          </td>
          <td>
            <img src={Search} alt="search" className="phone" />
            <span className="word">Search</span>
          </td>
          <td>
            <img src={Service} alt="searvice" className="send" />
            <span className="word">Service</span>
          </td>
        </tr>
        <tr>
          <td className="para">
            Lorem ipsum dolor sit, amet consectetur and elit. Lorem ipsum  Lorem ipsum
            <br /> <br />
            dolor sit, amet consectetur elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, vero!
          </td>
          <td className="para">
            Lorem ipsum dolor sit, amet consectetur and elit. Lorem ipsum Lorem ipsum 
            <br /><br />
            dolor sit,amet consectetur elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, unde?
            
          </td>
          <td className="para">
            Lorem ipsum dolor sit, amet consectetur and elit. Lorem ipsum  Lorem ipsum
            <br /><br />
            dolor sit,amet consectetur elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur.
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export { Aboutf };
