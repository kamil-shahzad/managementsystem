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
    CFormLabel
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
const User = () => {
    const [users, setUsers] = useState([]);
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
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCol md={4}>
                        <CFormLabel htmlFor="inputState">Resgistered Employees</CFormLabel>
                    </CCol>
                </CCard>
                <CTable align="middle" className="mb-0 border" hover responsive>
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
                </CTable>


                {/* <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </CCol>
        </CRow>
    )
}

export default User
