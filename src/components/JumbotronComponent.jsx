import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'

const mapStateToProps = (state) =>{
    return {
        title: state.users.title
    }
}

const JumbotronComponent = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <Container fluid>
                        <h1 className="display-3">{props.title}</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <Button color="dark"><FontAwesomeIcon icon={faInfo} /> info </Button>
                        
                    </Container>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default connect(mapStateToProps,null)(JumbotronComponent);