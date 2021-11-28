import Container from "../components/Container"
import fetch from "isomorphic-fetch"
import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import Users from "../components/Users"

const Index = (props) =>{
    return (
            <Container>
                <title>Next - Home Page</title>
                <Users users={props.users}/>
            </Container>
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const res_json = await res.json();
    return {users:res_json.data}
}

export default Index