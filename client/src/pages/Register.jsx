import React from "react";
import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);
  return (
    <>
      <Form onSubmit={registerUser}>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Stack gap={3}>
              <h1>Inscription</h1>

              <Form.Control
                type="text"
                placeholder="Entrez votre nom et prenom"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />

              <Form.Control
                type="email"
                placeholder="Entrez votre adresse E-mail"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />

              <Form.Control
                type="password"
                placeholder="Entez un mot de passe"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
              <Button variant="success" type="submit">
                {isRegisterLoading
                  ? "Création de votre compte ..."
                  : "Inscription"}
              </Button>
              {registerError?.error && (
                <Alert variant="danger"> {registerError?.message}</Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
