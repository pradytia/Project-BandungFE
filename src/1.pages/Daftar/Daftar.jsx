import React, { Component } from 'react';

class Daftar extends Component {
    render() {
        return (
            <div className='container mt-5 text-center'>
                <div>
                    <span style={{fontSize:'15px', fontWeight:'bold'}}>Biodata Pendaftaran</span>
                </div>
                <div className="row mt-5">
                    <div className="form-group col-md-6">
                        <p align='left'>*Input Nama</p>
                        <input type="text"  className="form-control form-control-md" />
                    </div>
                    <div className="form-group col-md-6">
                        <p align='left'>*Input Email</p>
                        <input type="text"  className="form-control form-control-md" />
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="form-group col-md-6">
                        <p align='left'>*Input NomorHandphone</p>
                        <input type="text"  className="form-control form-control-md" />
                    </div>
                    <div className="form-group col-md-6">
                        <p align='left'>*Input</p>
                        <input type="text"  className="form-control form-control-md" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Daftar;