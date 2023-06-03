import React from 'react'
import {CTable,  CTableRow, CTableHead, CTableBody , CTableHeaderCell , CAvatar ,CIcon , cilPeople , tableExample , CTableDataCell} from '@coreui/react'
export const Software = () => {
  return (
    <div>
         <CTable align="middle" className="mb-0 border" hover responsive>
                                <CTableHead color="light">
                                    <CTableRow>
                                        <CTableHeaderCell className="text-center">
                                            <CIcon icon={cilPeople} />
                                        </CTableHeaderCell>
                                        <CTableHeaderCell>User</CTableHeaderCell>
                                        <CTableHeaderCell>Activity</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {tableExample.map((item, index) => (
                                        <CTableRow v-for="item in tableItems" key={index}>
                                            <CTableDataCell className="text-center">
                                                <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <div>{item.user.name}</div>
                                                <div className="small text-medium-emphasis">
                                                    <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                                                    {item.user.registered}
                                                </div>
                                            </CTableDataCell>
                                            {/* <CTableDataCell className="text-center">
                                                <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                                            </CTableDataCell> */}
                                            <CTableDataCell>
                                                {/* <div className="clearfix">
                                                    <div className="float-start">
                                                        <strong>{item.usage.value}%</strong>
                                                    </div>
                                                    <div className="float-end">
                                                        <small className="text-medium-emphasis">{item.usage.period}</small>
                                                    </div>
                                                </div> */}
                                                {/* <CProgress thin color={item.usage.color} value={item.usage.value} />

                                                <CTableDataCell className="text-center">
                                                <CIcon size="xl" icon={item.payment.icon} />
                                            </CTableDataCell> */}

                                                <div className="small text-medium-emphasis">Last login</div>
                                                <strong>{item.activity}</strong>
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))}
                                </CTableBody>
                            </CTable>
    </div>
  )
}
