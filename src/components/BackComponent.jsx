import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BackComponent = () => {
    return (
        <Row>
            <Col>
                <Link to={"/"}>
                    <Button color="secondary" size="md">
                        <FontAwesomeIcon icon={faArrowLeft} /> Kembali
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}
