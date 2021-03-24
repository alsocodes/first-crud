import { faEdit, faInfo, faTrash, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'

const { SearchBar } = Search;
const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
        headerStyle: () => {
            return {
                width: "5%"
            }
        }
    }, {
        dataField: 'nama',
        text: 'Nama',
        sort: true,
    }, {
        dataField: 'alamat',
        text: 'Alamat',
        sort: true,
    },
    {
        dataField: "link",
        text: "Action",
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={"detail/" + row.id}>
                        <Button color="info" size="sm" className="mr-1 mb-1">
                            <FontAwesomeIcon icon={faInfo} /> Detail
                        </Button>
                    </Link>

                    <Link to={"edit/" + row.id}>
                        <Button color="warning" size="sm" className="mr-1 mb-1">
                            <FontAwesomeIcon icon={faEdit} /> Edit
                        </Button>
                    </Link>

                    <Button color="danger" size="sm" className="mr-1 mb-1">
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </Button>
                </div>
            );
        }
    }
];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}]

const mapStateToProps = (state) => {
    return {
        getUserList: state.users.getUserList,
        errorUserList: state.users.errorUserList
    }
}

const TableComponent = (props) => {
    return (
        <Container>
            { props.getUserList ?
                <ToolkitProvider
                    bootstrap4
                    keyField='id'
                    data={props.getUserList}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search
                >
                    {
                        props => (
                            <div>
                                <Row>
                                    <Col>
                                        <Link to={"create"}>
                                            <Button color="primary" size="md" className="mr-1 mb-1">
                                                <FontAwesomeIcon icon={faUserAlt} /> Add User
                                    </Button>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <div className="float-right">
                                            <SearchBar {...props.searchProps} placeholder="Pencarian" />
                                        </div>
                                    </Col>
                                </Row>
                                <BootstrapTable
                                    {...props.baseProps}
                                    pagination={paginationFactory()}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
                : 
                <div className="text-center">
                    { props.errorUserList ? 
                        <h4>{props.errorUserList}</h4>
                    :
                        <Spinner color="primary"/>
                    }
                </div>
            }
        </Container>

    )
}

export default connect(mapStateToProps, null)(TableComponent);