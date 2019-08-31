import React from 'react'
import Form from './Form'


export default ({ onSubmit, errorEncountered }) => (
  <main className='container'>
    <section className='row justify-content-md-center'>
      <div className='col col-lg-5'>
        <h1>Login</h1>
        {errorEncountered ? ( <div class="alert alert-danger" role="alert">
  Incorrect username or password. Check your credentials and please try again.
</div>) : ("")}
        <Form onSubmit={onSubmit} />
      </div>
    </section>
  </main>
)

