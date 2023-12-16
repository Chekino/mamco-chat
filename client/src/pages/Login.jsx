import React from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Form>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Stack gap={3}>
              <h1>Connexion</h1>

              <Form.Control
                type="email"
                placeholder="Entrez votre adresse E-mail"
              />

              <Form.Control
                type="password"
                placeholder="Entez un mot de passe"
              />
              <Button variant="success" type="submit">
                Connexion
              </Button>
              <Alert variant="danger"> Erreur</Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
