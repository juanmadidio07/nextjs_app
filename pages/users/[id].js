import { useRouter } from "next/dist/client/router";
import fetch from "isomorphic-fetch";
import Container from "../../components/Container";

const Profile = ({user}) => {
    const router = useRouter();
    const {id} = router.query;

    return(
        <Container>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src={user.avatar} style={{borderRadius:'50%'}}/>
                        </div>
                        <div className="card-body text-center">
                            <h3>{user.id} {user.first_name} {user.last_name}</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

Profile.getInitialProps = async (ctx) => {
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const res_json = await res.json();
    return {user : res_json.data}
}

export default Profile;