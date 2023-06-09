import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NavbarComponent() {
  return (
    <>
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-xl">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/articles">
            Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/write">
            Write
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
        <Link href="/signup" passHref>
          <Button className="nav-link">
              Signup
          </Button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</Nav>
    </>
  );
}

export default NavbarComponent;