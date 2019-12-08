import React, { Component } from 'react';
import {  MDBMask, MDBView , MDBBtn, MDBBtnGroup, MDBRow, MDBNavLink} from 'mdbreact';

class Home extends Component {
    render() {
        return (
            <div>
                <MDBView 
                    src="https://www.ponpeszamzam.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-10-at-07.31.37.jpeg">
                    <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
                        <h2 style={{}}>Kost Tahfidz Qurani </h2>
                        <p style={{fontStyle:'italic'}}>"Jatinangor, Bandung"</p>
                        <MDBRow className='mt-3'>
                            <MDBNavLink to='/daftar'>
                                <MDBBtnGroup>
                                    <MDBBtn color="amber" size="md">Daftar Sekarang</MDBBtn>
                                </MDBBtnGroup>
                            </MDBNavLink>
                        </MDBRow>
                    </MDBMask>
                 </MDBView>
                <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://www.ponpeszamzam.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-10-at-07.31.37.jpeg"
                             style={{maxWidth:'100%'}} alt=''
                        />
                    </div>
                    <div className="col-md-6 ">
                        <h4 className='text-center'> Tentang Kost Tahfidz Qurani </h4>
                        <p align='justify' style={{color:'grey', padding:15, fontSize:'15px'}}>
                            Kost Tahfidz Qurani didirikan dengan harapan untuk melahirkan kembali generasi penegak kejayaan Islam 
                            yang akan mengembalikan masyarakat muslim kepada masa keemasannya, kepada Al-Qur’an, 
                           kepada kemurnian ajaran Islam, kepada Aqidah yang lurus dan Akhlaqul karimah yang berlandaskan Al-Quran, dan As-Sunnah, serta 
                           berdasarkan pemahaman ulama salaf Ahlus Sunnah wal Jama’ah, dan mengembalikan bahasa Arab sebagai bahasa kaum muslimin.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;