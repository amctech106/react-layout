import Person from "../Assets/person.png";
function People() {

    return (
        <div className="people">
<table className="table2">
    <thead>
        <tr>
            <td><img src={Person} alt="People"  className="peopleimg"/></td>
            <td><img src={Person} alt="People"  className="peopleimg"/></td>
            <td><img src={Person} alt="People"  className="peopleimg"/></td>
        </tr>
        <tr>
            <td className="name">Abdul Majeed </td>
            <td className="name"> Sardar Chandio</td>
            <td className="name">Danyal Ansari</td>
        </tr>
        <tr>
            <td className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nobis,</td>
            <td className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nobis,</td>
            <td className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nobis,</td>
        </tr>
        
    </thead>
</table>
        </div>
    )
}

export {People}