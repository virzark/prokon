/* import(s) */
import {Container} from "react-bootstrap";

const Dapatkan = () => {
    return (
        <Container>
            <form role="form" id="Dapatkan">
                <h2>Dapatkan Produk</h2>

                <div class="form-group">
                <label className="label">Product ID</label>
                <input className="input" type="number"/>
                </div>

                <div class="form-group">
                <button className="tombol">Dapatkan Produk</button>
                </div>
            </form>
        </Container> 
    )
}

export default Dapatkan