import React, { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginUser, loginInfo, updateLoginInfo, loginError, isLoginLoading } =
    useContext(AuthContext);
  return (
    <>
      <Form onSubmit={loginUser}>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Stack gap={3}>
              <h1>Connexion</h1>

              <Form.Control
                type="email"
                placeholder="Entrez votre adresse E-mail"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />

              <Form.Control
                type="password"
                placeholder="Entez un mot de passe"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
              <Button variant="success" type="submit">
                {isLoginLoading
                  ? "Identification en cours ..."
                  : "Identifiez-vous"}
              </Button>
              {loginError?.error && (
                <Alert variant="danger"> {loginError?.message}</Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
