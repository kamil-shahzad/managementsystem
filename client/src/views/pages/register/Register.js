import { React, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibElasticSearch, cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  async function registerUser() {
    console.log("Register user is working")
    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      header: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name, email, password
      }),
    })
    const data = await response.json()
    console.log(data)
    if(name != '' && email != '' && password != "")
    alert("User has been added")
    else
    alert("Please fill out all the forms first in order to do things")
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={registerUser}>
                  <h1>Register to Ovex</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" value={name} autoComplete="username" onChange={(e) => setName(e.target.value)} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton onClick={registerUser} color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
