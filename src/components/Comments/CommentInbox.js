import React from 'react'
import ashish from '../../Assets/Ashish-Sharma.jpg'
export default function CommentInbox() {
    return (
        <>
            <section className='container commentInbox py-3 h-100 overflow-auto'>

                <div className='row Comment-wrapper  bg-light py-2 border-top border-bottom mb-3'>

                    <div className='parent-profile col-2 col-md-1'>
                        <img src={ashish} alt="Ashish" width={45} height={45} className='border rounded-circle' />
                    </div>
                    <div className='parent-profile-info col-10 col-md-11' style={{fontSize:"14px"}}>
                        <span className='name text-primary fw-normal'>Ashish Sharma</span> - <span>posted 1 d ago</span>
                        <span className='designation d-block text-secondary'>Developer Effectual</span>
                    </div>

                    <div className='child-wrapper col-md-12 ps-md-5'>
                        <div className='comment border-bottom pb-3 mb-3 '>
                            Ashish sharma,
                            
                            Thank You eli excepteur qui sit do ullamco nulla consequat sit laboris. Qui sunt excepteur in adipisicing ea tempor laborum. Laboris veniam sint Lorem in incididunt elit. Ea voluptate dolor eu reprehenderit in ad. Commodo Lorem ipsum qui cupidpatat proident labore qui consequat. Ut consequat id duis esse nostrud commodo ea enim officia minim. Culpa consequat tempor nisi officia minim tempor ut.
                        </div>

                        <div className='replies-container ps-4'>
                            <div className='row replie'>

                                <div className='child-profile col-2 col-md-1'>
                                    <img src={ashish} alt="Ashish" width={45} height={45} className='border rounded-circle' />
                                </div>
                                <div className='child-profile-info col-10 col-md-11' style={{fontSize:"14px"}}>
                                    <span className='name text-primary fw-normal'>Ashish Sharma</span> - <span>replied 3 h ago</span>
                                    <span className='designation d-block text-secondary'>Developer Effectual</span>
                               </div>
                                <div className='replie-container col-md-12'>
                                    Sunt eiusmod laborum laborum quis mollit excepteur laboris pariatur. Irure aute veniam sit est tempor irure. Ullamco dolore ipsum adipisicing sunt esse sint officia.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
