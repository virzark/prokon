/* import(s) */
import {Container} from "react-bootstrap";

const Register = () => {
    return (
        <Container>
            <form role="form" id="Register">
                <h2>Register Company</h2>

                <div class="form-group">
                <label className="label">Nama Penerbit</label>
                <input className="input" type="text" />
                </div>

                <div class="form-group">
                <button className="tombol">Register Company</button>
                </div>
            </form>
        </Container> 
    )
}

export default Register