import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHeader,
    CTableHeaderCell,
    CTableRow,
    CTableHead,
    CFormLabel,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter, CForm, CInputGroup, CInputGroupText, cilUser, cilLockLocked, CFormInput
} from '@coreui/react';
import {
    cilDelete,
    cilEducation,
    cilPeople,
    cilBell,
    cilViewModule
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
const User = () => {
    const [users, setUsers] = useState([]);
    const [visible, setVisible] = useState(false);
    const [report, setReport] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:8080/users');
            const data = response.data;
            setUsers(data);
        };
        fetchUsers();
    }, []);
    return (
        <CRow>
            <CCol lg={10}>
                <h3>Registered Users</h3>
            </CCol>
            <CCol lg={2}>
                <CButton color="info" className='text-right' onClick={() => setVisible(!visible)}>Add Users</CButton>
                <CModal visible={visible} onClose={() => setVisible(false)}>
                    <CModalHeader onClose={() => setVisible(false)}>
                        <CModalTitle>Add User</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm>
                            <CInputGroup className="mb-3">
                                <CFormInput placeholder="Username" autoComplete="username" />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CFormInput
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                />
                            </CInputGroup>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisible(false)}>
                            Close
                        </CButton>
                        <CButton color="primary">Download Report</CButton>
                    </CModalFooter>
                </CModal>
            </CCol>
            <CCol xs={12} className='my-5'>
                <CCard className="mb-4">
                    <CCol md={12}>
                        <CTable align="middle" className="mb-0 border" hover responsive>
                            <CTableHead color="light">
                                <CTableRow>
                                    <CTableHeaderCell className="text-center">
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-right">Name</CTableHeaderCell>
                                    <CTableHeaderCell>Role</CTableHeaderCell>
                                    <CTableHeaderCell className='text-center'>Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {users.map((item) => (
                                    <CTableRow v-for="item in tableItems">
                                        <CTableDataCell className="text-center">

                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <div className="small text-medium-emphasis">
                                                <span>{item.name}</span>
                                            </div>
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <div className="clearfix">
                                                <span>{item.role}</span>
                                            </div>
                                        </CTableDataCell>
                                        <CTableDataCell className="text-center">
                                            <CButton color="secondary" onClick={() => setVisible(!visible)}>
                                                <CIcon icon={cilViewModule} className="me-2" />
                                                View Report
                                            </CButton>
                                         { visible && <CModal onClose={() => setVisible(false)}>
                                                <CModalHeader onClose={() => setVisible(false)}>
                                                    <CModalTitle>Add User</CModalTitle>
                                                </CModalHeader>
                                                <CModalBody>
                                                    <CTable>
                                                        <CTableHead>
                                                            <CTableBody>
                                                                <CTableRow>
                                                                    Name
                                                                </CTableRow>
                                                            </CTableBody>
                                                        </CTableHead>
                                                    </CTable>
                                                </CModalBody>
                                                <CModalFooter>
                                                    <CButton color="secondary" onClick={() => setVisible(false)}>
                                                        Close
                                                    </CButton>
                                                    <CButton color="primary">Download Report</CButton>
                                                </CModalFooter>
                                            </CModal>
}
                                            {/* <button type="button" class="btn btn-secondary">View Report </button> */}
                                            <button type="button" class="btn btn-success">Edit  </button>
                                            {/* <button type="button" class="btn btn-danger"><cilDelete >Delete</cilDelete></button> */}
                                            <CButton color="danger">
                                                {/* <CIcon icon={cilBell} className="me-2" /> */}
                                                Delete
                                            </CButton>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCol>
                </CCard>
                {/* <CTable align="middle" className="mb-0 border" hover responsive>
                    <CTableHead color="light">
                        <CTableHeaderCell>User</CTableHeaderCell>
                        <CTableHeaderCell>Role</CTableHeaderCell>
                    </CTableHead>
                    <CTableBody>
                        {users.map((item) => (
                            <CTableRow v-for="item in tableItems">
                                <CTableDataCell>
                                    <div>{item.name}</div>
                                </CTableDataCell>
                                <CTableDataCell>
                                    <div>{item.role}</div>
                                </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable> */}
                {/* <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
          
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-right">Name</CTableHeaderCell>
                    <CTableHeaderCell>Role</CTableHeaderCell>
                    <CTableHeaderCell className='text-center'>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map((item) => (
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="text-center">
                     
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">
                          <span>{item.name}</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                            <span>{item.role}</span>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                    <button type="button" class="btn btn-success">Edit  </button>
                    <button type="button" class="btn btn-danger"><cilDelete>Delete</cilDelete></button>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable> */}

            </CCol>
        </CRow>
    )
}

export default User
