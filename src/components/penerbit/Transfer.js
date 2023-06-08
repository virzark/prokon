/* import(s) */
import {Container} from "react-bootstrap";

const Transfer = () => {
    return (
        <Container>
            <form role="form" id="Transfer">
                <h2>Transfer Produk</h2>

                <div class="form-group">
                <label className="label">Product ID</label>
                <input className="input" type="number"/>
                </div>
                
                <div class="form-group">
                <label className="label">Jumlah Transfer</label>
                <input className="input" type="number"/>
                </div>

                <div class="form-group">
                <button className="tombol">Transfer Produk</button>
                </div>
            </form>
        </Container> 
    )
}

export default Transfer