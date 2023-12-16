import React, { useContext } from "react";
import { Container, Navbar, Nav, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <Navbar bg="dark" className="mb-4">
        <Container>
          <h2>
            <Link to="/" className="link-light text-decoration-none">
              MamcoChat
            </Link>
          </h2>
          <span className="text-danger">{user?.name} </span>
          <Nav>
            <Stack direction="horizontal" gap={3}>
              {user && (
                <>
                  <Link
                    onClick={() => logoutUser()}
                    to="/login"
                    className="link-light text-decoration-none"
                  >
                    Deconnexion
                  </Link>
                </>
              )}

              {!user && (
                <>
                  <Link to="/login" className="link-light text-decoration-none">
                    Connexion
                  </Link>
                  <Link
                    to="/register"
                    className="link-light text-decoration-none"
                  >
                    Inscription
                  </Link>
                </>
              )}
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
