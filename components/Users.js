import  Router from "next/router"

const Users = (props) => {
    return(
        <ul className="list-group">
            <h1>Users List</h1>
            {
                props.users.map(user =>(
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={e=>Router.push('/users/[id]', `/users/${user.id}`)} key={user.id}>
                        <div>
                        <h4>{user.first_name} {user.last_name}</h4>
                        <p>Email: {user.email}</p>
                        </div>
                        <img src={user.avatar} alt={user.first_name + user.last_name} style={{borderRadius:'50%'}}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default Users