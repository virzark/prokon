/* import(s) */
import {Container} from "react-bootstrap";

const Tambah = () => {
    return (
        <Container>
            <form role="form" id="Tambah">
                <h2>Tambah Produk</h2>

                <div class="form-group">
                <label className="label">Nama Penerbit</label>
                <input className="input" type="text" />
                </div>


                <div class="form-group">
                <label className="label">Product ID</label>
                <input className="input" type="number"/>
                </div>

                <div class="form-group">
                <label className="label">Nama Produk</label>
                <input className="input" type="text" />
                </div>

                <div class="form-group">
                <label className="label">Deskripsi Produk</label>
                <input className="input" type="text" />
                </div>
                
                <div class="form-group">
                <label className="label">Jumlah</label>
                <input className="input" type="number"/>
                </div>

                <div class="form-group">
                <label className="label">ISBN</label>
                <input className="input" type="text" />
                </div>

                <div class="form-group">
                <label className="label">Penulis</label>
                <input className="input" type="text" />
                </div>

                <div class="form-group">
                <label className="label">Penerbit</label>
                <input className="input" type="text" />
                </div>

                <div class="form-group">
                <button className="tombol">Tambah Produk</button>
                </div>
            </form>
        </Container> 
    )
}

export default Tambah