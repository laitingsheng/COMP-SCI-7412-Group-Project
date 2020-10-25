/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim
* Edited by Tinson Lai

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import classnames from "classnames";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    NavLink,
    Row
} from "reactstrap";

import { auth } from "../../firebase";
import { ReCAPTCHA_key } from "../../constants"
import UserComponent from "../../UserComponent";
import AuthHeader from "./header/AuthHeader";

export default class Login extends UserComponent {
    /**
     * @type {React.RefObject<ReCAPTCHA>>}
     */
    recaptcha = React.createRef();

    /**
     * @param {FormEvent} e
     */
    login = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(
            () => this.recaptcha.current.reset(),
            console.log
        );
    }

    render() {
        return <>
            <AuthHeader title="Online Voting System" lead="Please sign in with your account" />
            <Container className="mt--8 pb-5">
                <Row className="justify-content-center">
                    <Col lg="5" md="7">
                        <Card className="bg-secondary border-0 mb-0">
                            <CardBody className="px-lg-5 py-lg-5">
                                <Form role="form" onSubmit={this.login}>
                                    <FormGroup className={classnames("mb-3", { focused: this.state.focusedEmail })}>
                                        <InputGroup className="input-group-merge input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-email-83" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Email" type="email" required onFocus={() => this.setState({ focusedEmail: true })} onBlur={() => this.setState({ focusedEmail: false })} onChange={e => this.setState({ email: e.target.value })} />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className={classnames({ focused: this.state.focusedPassword })}>
                                        <InputGroup className="input-group-merge input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-lock-circle-open" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Password" type="password" required onFocus={() => this.setState({ focusedPassword: true }) } onBlur={() => this.setState({ focusedPassword: false }) } onChange={e => this.setState({ password: e.target.value })} />
                                        </InputGroup>
                                    </FormGroup>
                                    <ReCAPTCHA className="text-center" sitekey={ReCAPTCHA_key} ref={this.recaptcha} onChange={() => this.setState({ checked: true })} onExpired={() => this.setState({ checked: false })} />
                                    <div className="text-center">
                                        <Button className="my-4" color="info" type="submit" disabled={!this.state.checked}>Sign in</Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                        <Row className="mt-3">
                            <Col xs="6" />
                            <Col className="text-right" xs="6">
                                <NavLink className="text-light" to="/register" tag={Link}>
                                    <small>Create new account</small>
                                </NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>;
    }
}