import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <MDBFooter className=' bg-slate-50 mt-8 text-center text-lg-start text-muted '>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Shivam Shop
                            </h6>
                            <p>
                                Explore the men's and women's collection by Shivam shop at Bloomingdale's. Free shipping and returns available or buy online and pick up in-store!
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <Link to='/cartdata/male' className='text-reset'>
                                    Male
                                </Link>
                            </p>
                            <p>
                                <Link to='/cartdata/female' className='text-reset'>
                                    Female
                                </Link>
                            </p>
                            <p>
                                < Link to='/cartdata/child' className='text-reset'>
                                    Child
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <Link to='/about' className='text-reset'>
                                    About
                                </Link>
                            </p>
                            <p>
                                <Link to='/contect' className='text-reset'>
                                    Contect
                                </Link>
                            </p>
                            <p>
                                <Link to='/AddToCart' className='text-reset'>
                                    Orders
                                </Link>
                            </p>
                            <p>
                                <Link to='/contect' className='text-reset'>
                                    Help
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                India, M.P. 487551, Ind
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                shivamshop@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center py-2 px-4 bg-black text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright:
            </div>
        </MDBFooter>
    );
}