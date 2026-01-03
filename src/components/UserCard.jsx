


const UserData = [
  { name: "Dinesh", city: "Chennai", role: "Frontend Developer" },
  { name: "Dinesh", city: "Chennai", role: "Frontend Developer" },
  { name: "Dinesh", city: "Chennai", role: "Frontend Developer" },
  { name: "Dinesh", city: "Chennai", role: "Frontend Developer" },
  { name: "Dinesh", city: "Chennai", role: "Frontend Developer" },
];
function User(props) {

  return (
    <div className='cardContainer'>
      <span className='pro'>ONLINE</span>
<img src="./dinesh.jpg" alt="user" className="logo" />



      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.role}</p>

      <div>
        <button>Follow</button>
        <button>Message</button>
      </div>

      <div>
        <h5>Skills</h5>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  )
}

export const UserCard = () => {
  return (
    <div>

 <div>
      {UserData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          role={user.role}
        />
      ))}
    </div>


    </div>
    
  )
}
